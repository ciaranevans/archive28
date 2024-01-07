import { BACKEND_URL } from "$env/static/private"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		resp: await(((await fetch(BACKEND_URL)).json()))
	};
}
