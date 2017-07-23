import UsersService from "../services/UsersService";

class UsersController {
    async getUsers(req, res) {
        const users = await UsersService.FindAll();
        res.json(users);
    }

    async createUser(req, res) {
        const created = await UsersService.Create(req.body);
        res.json(created);
    }
}

export default new UsersController();

