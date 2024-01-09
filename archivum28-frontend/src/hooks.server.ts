import { SvelteKitAuth } from '@auth/sveltekit';
import Instagram from '@auth/sveltekit/providers/instagram';
import { AUTH_SECRET, INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
        Instagram({clientId: INSTAGRAM_CLIENT_ID, clientSecret: INSTAGRAM_CLIENT_SECRET})
    ],
	secret: AUTH_SECRET,
	trustHost: true
});
