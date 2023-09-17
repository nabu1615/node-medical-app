"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var User = /** @class */ (function () {
    function User(name, lastname, email, password, age, street, number, city, country, gender) {
        if (name.length < 3)
            throw new Error("El nombre debe tener al menos 3 caracteres");
        if (lastname.length < 3)
            throw new Error("El apellido debe tener al menos 3 caracteres");
        if (email.length < 3)
            throw new Error("El email debe tener al menos 3 caracteres");
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new Error("El email no es válido");
        }
        if (age < 18)
            throw new Error("Debes ser mayor de edad");
        if (age > 140)
            throw new Error("Edad no válida");
        var address = new Address();
        address.street = street;
        address.number = number;
        address.city = city;
        address.country = country;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    return User;
}());
exports.User = User;
