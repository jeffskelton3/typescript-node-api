import UsersService from "../services/UsersService";
import app from '../app';
import { Get, Post } from '../routes';



class UsersController {            
    @Get('/users')
    getUsers(req, res) {        
        return res.json({
            message: 'works with the decorator'
        });
    }
    
    @Post('/users')
    async createUser(req, res) {
        const created = await UsersService.Create(req.body);
        res.json(created);
    }
}

export default new UsersController();

