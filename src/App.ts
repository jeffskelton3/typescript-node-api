import * as express from 'express';

class App {
	public express;
	public routes;
	constructor () {
		this.express = express();		
	}
}

export default new App().express