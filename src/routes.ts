import app from './App';

export function mountRoutes () {	
	app.get('/', (req, res) => {
		res.json({
			message: 'this works'
		});
	});
}

