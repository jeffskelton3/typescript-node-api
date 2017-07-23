class UsersController {
    constructor () {
        

    }

    getUsers(req, res) {                
        res.json({
            message: 'works from the controller'
        });
    }
}

export default new UsersController();

