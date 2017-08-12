
import UserController from '../controllers/users.controller';

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
    },
    {
        method: 'post',
        url: '/users',
        callback: UserController.createUser
    }
];

// export function getRouteMetadata(controller: any) {
//     const parentConstructor = Object.getPrototypeOf(controller.prototype).constructor;
//     const parentAnnotations = Reflect.getMetadata('annotations', parentConstructor);
//     console.log(parentAnnotations);
// }

