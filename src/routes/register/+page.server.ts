import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		let formData = Object.fromEntries(await request.formData()) as Record<string, string>;

		console.log(formData);
	}
};
