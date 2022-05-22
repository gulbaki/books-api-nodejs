import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany} from "typeorm";
import { User } from "./User.model";
import { Book } from "./Book.model";
import { userInfo } from "os";

@Entity("user_book")
export class UserBook extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "int", default: -1 })
    public status: number

    @Column({ type: "int", default: -1 })
    public user_score: number
    
    @ManyToOne(type => User) @JoinColumn({ name: "user_id"}) 
    user: User;

    @ManyToOne(type => Book) @JoinColumn({ name: "book_id"}) 
    book: Book;

}
