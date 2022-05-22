import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("book")
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column({ type: "int", default: -1 })
    public score: number

}
