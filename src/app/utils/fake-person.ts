import { faker } from '@faker-js/faker'
import { randomIntFromInterval } from './utils'

export const fakePerson = {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    age: randomIntFromInterval(18, 140),
    address: {
        street: faker.location.street(),
        number: 123,
        city: faker.location.city(),
        country: faker.location.country()
    },
    gender: faker.helpers.arrayElement(["Hombre", "Mujer", "Otro"]),
}