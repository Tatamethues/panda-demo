import { createMiddleware } from "@solidjs/start/middleware";
import { Session, User, verifyRequestOrigin } from "lucia";

import { lucia } from "./api/auth";

export default createMiddleware({
	onRequest: [
		(event) => {
			console.log("GLOBAL", event.request.url);
		},
	],
});

// declare module "vinxi" {
// 	interface H3EventContext {
// 		user: User | null;
// 		session: Session | null;
// 	}
// }
