import app from './App';
import * as routes from './routes';

routes.mountRoutes();

const port = 3000;

app.listen(port, err => {
	if (err) { 
		return console.log(err);
	}

	return console.log(`server is listening on port ${port}`);
});