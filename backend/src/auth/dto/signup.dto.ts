import { IsEmail, IsNotEmpty, IsString, MinLength,Matches } from "class-validator";


export class SignUpDto{
    @IsNotEmpty({ message: 'Name cannot be empty' })
    @IsString({ message: 'Name must be a string' })
    readonly name: string;

    @IsNotEmpty({ message: 'Email cannot be empty' })
    @IsEmail({},{message:'Please enter correct email'})
    readonly email: string;


    @IsNotEmpty({ message: 'Password cannot be empty' })
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/, {
        message: 'Password must contain at least 1 letter, 1 number, and 1 special character',
    })
    readonly password: string;
}

