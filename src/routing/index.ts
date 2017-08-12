
import UserController from './controllers/UsersController';

export interface IRoute {
	method: string,
	url: string,
	callback: Function
}

export const routes: IRoute[] = [
    {
        method: 'get',
        url: '/',
        callback: UserController.getUsers
    }
];

// export function getRouteMetadata(controller: any) {
//     const parentConstructor = Object.getPrototypeOf(controller.prototype).constructor;
//     const parentAnnotations = Reflect.getMetadata('annotations', parentConstructor);
//     console.log(parentAnnotations);
// }

