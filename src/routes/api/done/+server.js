
import { addDone} from '#lib/index.js';
export async function PUT({ request }) {
    const { id } = await request.json();
    addDone(id);
	return Response.json(true);
}

