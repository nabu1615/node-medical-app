import { UserUpdate } from "../application/UserUpdate";
import { User } from "./User";

export interface UserRepository {
    save(user: User): Promise<User>;
    update(id: string, updatedUser: UserUpdate): Promise<User | null>;
    paginate(page: number, limit: number): Promise<User[] | null>;
    getOne(id: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    getAll(): Promise<User[]>
}