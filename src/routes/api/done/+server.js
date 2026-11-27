import { ObjectId } from 'mongodb';
import { db } from '#lib/mongo.server.js';
export async function PUT({ request }) {
    const { id } = await request.json(); 
    const task = await db.collection('tasks').findOne({ _id: new ObjectId(id)});
    await db.collection('done').insertOne(task);
    await db.collection('tasks').deleteOne({ _id: new ObjectId(id)});
    return Response.json(true);
}