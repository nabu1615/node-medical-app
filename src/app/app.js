"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserCreate_1 = require("./modules/user/application/UserCreate");
var User_1 = require("./modules/user/domain/User");
var UserInfrastructure_1 = require("./modules/user/infrastructure/UserInfrastructure");
var user = new User_1.User("Javier", "Vargas", "javier.vargas@email.com", "12345", 34, "calle azul", 345, "LIma", "Perú", "Hombre");
var repository = new UserInfrastructure_1.UserInfrastructure();
var app = new UserCreate_1.UserCreate(repository);
app.insert(user);
