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
	}
];



