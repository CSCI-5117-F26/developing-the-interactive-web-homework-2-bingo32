import { add} from '#lib/server.js';
import { db } from '#lib/mongo.server.js';
export async function POST({ request }) {
    const { title, summary, description} = await request.json();
    const count = await db.collection('tasks').countDocuments();
    const id = count + 1;  
    const task = {id, title, summary, description};
    await db.collection('tasks').insertOne(task);
    return Response.json(true);
}