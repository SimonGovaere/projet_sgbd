import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatUserDto } from './dto/creatUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getAll() {
        return[];
    }

    @Post()
    creat(@Body() creatUserDto : CreatUserDto) {
        return creatUserDto;
    }
}
