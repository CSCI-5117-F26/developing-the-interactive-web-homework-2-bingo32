import { add} from '#lib/index.js';
export async function POST({ request }) {
    const {title, summary, description} = await request.json();
    const task = {title, summary, description};
    add(task);
    return Response.json(true);
}