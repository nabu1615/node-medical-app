"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreate = void 0;
var UserCreate = /** @class */ (function () {
    function UserCreate(repository) {
        this.repository = repository;
    }
    UserCreate.prototype.insert = function (user) {
        this.repository.save(user);
        console.log('User Created', user);
    };
    return UserCreate;
}());
exports.UserCreate = UserCreate;
