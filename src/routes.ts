import app from './App';

interface IRoute {
	method: string,
	url: string,
	callback: Function
}

export function mountRoutes() {
	const routes: IRoute[] = [
		{
			method: 'get',
			url: '/',
			callback: (req, res) => {
				res.json({
					message: 'this works'
				});
			}
		}
	];

	routes.forEach((route: IRoute) => {
		app[route.method](route.url, route.callback);
	});
}



