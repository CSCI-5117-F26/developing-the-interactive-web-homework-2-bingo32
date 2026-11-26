// import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';
// import {db, EJSON} from '#lib/mongo.server.ts'

// export const load: PageServerLoad = async ({ }) => {
// 	const tasks = await db.collection("tasks").find() //all tasks
    
//     return {tasks:EJSON.serialize(await tasks.toArray())}
// };