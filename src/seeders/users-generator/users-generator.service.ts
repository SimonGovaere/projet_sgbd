import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UsersGeneratorService {

    constructor(
        private readonly userService: UsersService,
    ) {}

    getRandomUser() {
        return {
            email: faker.internet.email(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            password: faker.internet.password(),
            username: faker.internet.username(),
        }
    }

    async generate(count=1) {
        const users = faker.helpers.multiple(this.getRandomUser, {
            count,
        });

        const response = await this.userService.create(users);
        return response;
    }
}
