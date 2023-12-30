import { IsEmail, IsNotEmpty, IsString, MinLength,Matches } from "class-validator";


export class LoginDto{
  
    @IsNotEmpty()
    @IsEmail({},{message:'Please enter email'})
    readonly email: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/, {
        message: 'Password must contain at least 1 letter, 1 number, and 1 special character',
    })
    readonly password: string;
}