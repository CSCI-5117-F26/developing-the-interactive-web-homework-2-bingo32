import { db } from '#lib/mongo.server.js';
export async function POST({ request }) {
    const { title, summary, description} = await request.json(); 
    const task = {title, summary, description};
    await db.collection('tasks').insertOne(task);
    // add error handling if needed
    return Response.json(true);
}