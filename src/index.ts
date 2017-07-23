import app from './app';
import { routes, IRoute } from './routes';

routes.forEach((route: IRoute) => {
	app[route.method](route.url, route.callback);
});
	
const port = process.env.PORT || 3000;

app.listen(port, err => {
	if (err) { 
		return console.log(err);
	}

	return console.log(`server is listening on port ${port}`);
});