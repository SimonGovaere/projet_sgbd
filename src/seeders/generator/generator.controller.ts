import { Controller, Get, Param } from '@nestjs/common';
import { UsersGeneratorService } from '../users-generator/users-generator.service';

@Controller('generator')
export class GeneratorController {

    constructor(
        private readonly UserGeneratorService: UsersGeneratorService
    ){ }
    

    @Get('/users/:count')
    user(@Param('count')count: string) {
        const nbUsers = parseInt(count, 10);
        return this.UserGeneratorService.generate(nbUsers);
    }
}
