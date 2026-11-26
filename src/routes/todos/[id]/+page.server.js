/** @type {import('./$types').PageLoad} */
import { find } from '#lib/server.js';
export function load({ params }) {
  const task = find(Number(params.id));
  return { task };
}