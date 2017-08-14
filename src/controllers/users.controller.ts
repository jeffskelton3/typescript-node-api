import Controller from './controller';
import UsersService from "../services/users.service";
// import {Controller, Get} from 'Typo';

/*
* Middleware that effects all endpoints in the controller.
* @Controller({
*   url: '/users',
*   cors: {
*       methods: '*',
*       domains: '*'
*   },
*   before: [someMiddlewareFunc], // happens before the route is hit. Validations, auth, etc.
*   after: [someOtherMiddlewareFunc] // happens after the route is done
* });
* */
class UsersController extends Controller{
    constructor() {
        super();
    }

    //@Get() inherits the properties of the @Controller and appends or overrides parameters as appropriate.
    public async getUsers(req, res) {
        try {
            const users = await UsersService.FindAll();
            return res.json(users);
        } catch (err) {
            return res.send(err);
        }
    }

    /*
    * @Post({
    *   url: '/create' <= will be '/users/create',
    *   cors: {
    *       domains: ['mydomain.com']
    *   },
    *   before: [middlewareFunctionSpecificToThisRoute]
    * });
    * */
    public async createUser(req, res) {
        try {
            const created = await UsersService.Create(req.body);
            return res.json(created);
        } catch (err) {
            return res.send(err);
        }
    }
}

export default new UsersController();

