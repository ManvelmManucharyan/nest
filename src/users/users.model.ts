import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column , DataType, HasMany, Model, Table} from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreation {
    email: string,
    password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreation> {
    @ApiProperty({ example: "1", description: "id" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "example@email.com", description: "email" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: "1234", description: "passsword" })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: "true/false", description: "is Banned" })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "for clause", description: "Reason for banning" })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany( () => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[]
}