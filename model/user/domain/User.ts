export type GENDER = "Nombre" | "Mujer" | "Otro"

export class Address {
    city: string
    street: string
}

export class User {
    name: string
    lastName: string
    email: string
    password: string
    age: number
    address: Address
    gender: GENDER

    constructor(name: string, lastName: string, email: string, password: string, age: number, address: Address, gender: GENDER) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password
    }
}