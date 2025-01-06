import { IsAlphanumeric, IsEmail, IsNotEmpty } from "class-validator";

export class CreatUserDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    firstname: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    lastname: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    username: string;
    
    @IsEmail()
    email: string;
}