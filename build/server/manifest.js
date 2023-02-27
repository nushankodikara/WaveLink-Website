const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","gif/cheque.gif","gif/credit-card.gif","gif/exchange.gif","gif/money-bag.gif","gif/tag.gif","images/hero-image.jpg","images/icononly_transparent_nobuffer.png","images/pattern 1.jpg","images/star.png","images/user.png","images/wavelink-logo.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-236bb0ba.js","imports":["_app/immutable/start-236bb0ba.js","_app/immutable/chunks/index-0c19e17c.js","_app/immutable/chunks/singletons-b9e7b874.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-6dd16a9b.js'),
			() => import('./chunks/1-4b3a702d.js'),
			() => import('./chunks/2-ec07016d.js'),
			() => import('./chunks/3-db858591.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
