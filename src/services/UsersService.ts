import db from '../models/index';
import {UsersAttributes, UsersInstance} from '../models/users.model';
import { ValidationService } from './ValidationService';

class UsersService {
    private _requiredFields: string[] = ['name'];

    FindAll (filterParams?:any, sortingParams?:any): Promise<UsersInstance> {
        return db.Users.findAll();
    }

    Create (user: UsersAttributes): Promise<any> {
        ValidationService.isValid(user, this._requiredFields);
        return db.Users.create(user);
    }
}

export default new UsersService();