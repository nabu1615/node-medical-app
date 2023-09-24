import { User } from "../domain/User";

export class UserMemory {
    static users: User[] = [
        {
            id: 'e9173096-0ceb-429a-9215-bfcc8a6db6a5',
            name: 'Javier',
            lastname: 'Vargas',
            email: 'javier.vargas@email.com',
            password: '12345',
            age: 34,
            address: {
                street: 'calle azul',
                number: 345,
                city: 'LIma',
                country: 'Perú'
            },
            gender: 'Hombre'
        }
    ]
}