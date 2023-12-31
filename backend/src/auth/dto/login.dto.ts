import { IsEmail, IsNotEmpty, IsString, MinLength,Matches } from "class-validator";


export class LoginDto{
  
    @IsNotEmpty()
    @IsEmail({},{message:'Please enter email'})
    readonly email: string;


    @IsNotEmpty()
    @IsString({ message: 'Password cannot be empty' })
    readonly password: string;
}