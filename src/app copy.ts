import { UserCreate } from "./app/modules/user/application/UserCreate";
import { UserGetOne } from "./app/modules/user/application/UserGetOne";
import { User } from "./app/modules/user/domain/User";
import { UserRepository } from "./app/modules/user/domain/UserRepository";
import { UserInfrastructure } from "./app/modules/user/infrastructure/UserInfrastructure";


(async () => {
    const user = new User(
        "e9173096-0ceb-429a-9215-bfcc8a6db6a57",
        "Javier",
        "Vargas",
        "javier.vargas2@email.com",
        "12345",
        34,
        "calle azul",
        345,
        "LIma",
        "Perú",
        "Hombre"
    );
    const repository: UserRepository = new UserInfrastructure();
    const app = new UserCreate(repository);
    // const app = new UserGetOne(repository);

    console.log(await app.insert(user))

    // console.log(await app.insert(user));
})()