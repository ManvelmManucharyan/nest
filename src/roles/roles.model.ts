import { ApiProperty } from "@nestjs/swagger";
import { Column , DataType, Model, Table} from "sequelize-typescript";

interface RoleCreation {
    value: string,
    description: string
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreation> {
    @ApiProperty({ example: "1", description: "id" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "ADMIN", description: "Role" })
    @Column({ type: DataType.STRING, unique: true , allowNull: false })
    value: string;

    @ApiProperty({ example: "Administrator", description: "Description" })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;
}