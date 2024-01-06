/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		resp: await(((await fetch("http://backend.railway.internal:6642")).json()))
	};
}
