import { ObjectId } from 'mongodb';
import { db, EJSON } from '#lib/mongo.server.js';
export const load = async ({ params}) => {
  const id = params.id;
	const task = await db.collection("tasks").findOne({ _id: new ObjectId(id)});
  console.log(task);
  return {task:EJSON.serialize(task)};
};
