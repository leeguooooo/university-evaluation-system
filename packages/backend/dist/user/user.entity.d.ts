export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    comparePassword(password: string): Promise<boolean>;
}
