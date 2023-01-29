import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "example@email.com", description: "email" })
    @IsString({ message: "Must be string" })
    @IsEmail({}, { message: "Not correct email" })
    readonly email: string;

    @ApiProperty({ example: "1234", description: "passsword" })
    @IsString({ message: "Must be string" })
    @Length(4, 16, { message: "Password must me 4-16 letters" })
    readonly password: string;
}