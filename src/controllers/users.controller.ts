import Controller from './controller';
import UsersService from "../services/UsersService";

class UsersController extends Controller{
    constructor() {
        super();
    }

    public async getUsers(req, res) {
        try {
            const users = await  UsersService.FindAll();
            return res.json(users);
        } catch (err) {
            return res.send(err);
        }
    }

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

