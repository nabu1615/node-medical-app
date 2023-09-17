"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfrastructure = void 0;
var UserInfrastructure = /** @class */ (function () {
    function UserInfrastructure() {
    }
    UserInfrastructure.prototype.save = function (user) {
        console.log("Saving user: ", user);
    };
    return UserInfrastructure;
}());
exports.UserInfrastructure = UserInfrastructure;
