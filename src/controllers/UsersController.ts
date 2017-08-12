import UsersService from "../services/UsersService";
import app from '../app';
import { Get, Post } from '../routes';



class UsersController {
    public getUsers(req, res) {
        return res.json({
            message: 'works with the decorator'
        });
    }

    public async createUser(req, res) {
        const created = await UsersService.Create(req.body);
        res.json(created);
    }

    public static getKeys () {
        return Object.keys(this);
    }
}

export default new UsersController();

