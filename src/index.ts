import app from './app';
import { routes, IRoute } from './routing';

routes.forEach((route: IRoute) => {
	app[route.method](route.url, route.callback);
});
	
const port = 3000;

app.listen(port, err => {
	if (err) { 
		return console.log(err);
	}

	return console.log(`server is listening on port ${port}`);
});