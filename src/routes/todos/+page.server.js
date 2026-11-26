import { error } from '@sveltejs/kit';
import { db, EJSON } from '#lib/mongo.server.js';

export const load = async ({ }) => {
	const tasks = await db.collection("tasks").find().sort({ _id: -1 }) //all tasks most recent
    return {tasks:EJSON.serialize(await tasks.toArray())};
};