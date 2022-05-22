import { BaseEntity, Column, Entity, PrimaryGeneratedColumn ,ManyToOne} from "typeorm";
import { UserBook } from "./UserBook.model";

@Entity("user")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

}
