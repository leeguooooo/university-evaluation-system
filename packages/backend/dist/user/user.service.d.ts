import { UserRepository } from './user.repository';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(userData: Partial<User>): Promise<User>;
    findUserById(id: number): Promise<User>;
    updateUser(id: number, userData: Partial<User>): Promise<User>;
    deleteUser(id: number): Promise<void>;
    findOneByEmail(email: string): Promise<User>;
    validateUser(email: string, password: string): Promise<User>;
}
