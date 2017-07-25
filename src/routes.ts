
import app from './app';

export function Get (url: string): Function {    
    return Route({ url: url, method: 'get'});
}

export function Post (url: string): Function {
    return Route({ url: url, method: 'post'});
}

export function Route({ url = null, method = null }: any): Function {
    return function(target, propertyKey: string, descriptor) {
        app[method](url, descriptor.value);
    }
}

import UsersController from './controllers/UsersController';

export interface IRoute {
	method: string,
	url: string,
	callback: Function
}

export const routes: IRoute[] = [
	{
		method: 'get',
		url: '/',
		callback: UsersController.getUsers
	},
	{
		method: 'post',
		url: '/user',
		callback: UsersController.createUser
	}
];



