import { error } from '@sveltejs/kit';
import { db, EJSON } from '#lib/mongo.server.js';

export const load = async ({ }) => {
  const done = await db.collection("done").find().sort({ _id: -1 }) //all tasks most recent
    return {done:EJSON.serialize(await done.toArray())};
};