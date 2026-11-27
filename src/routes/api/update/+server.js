import { ObjectId } from 'mongodb';
import { db } from '#lib/mongo.server.js';
export async function PUT({ request }) {
    const { id, title, summary, description} = await request.json(); 
    await db.collection('tasks').updateOne( { _id: new ObjectId(id) }, { $set: { title: title, summary: summary, description: description } });
    return Response.json(true);
}