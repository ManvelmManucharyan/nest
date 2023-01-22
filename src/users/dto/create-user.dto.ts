import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "example@email.com", description: "email" })
    readonly email: string;

    @ApiProperty({ example: "1234", description: "passsword" })
    readonly password: string;
}