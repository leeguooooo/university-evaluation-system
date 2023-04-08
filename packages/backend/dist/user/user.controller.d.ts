import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(userData: Partial<User>): Promise<User>;
    findUserById(id: number): Promise<User>;
    updateUser(id: number, userData: Partial<User>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
