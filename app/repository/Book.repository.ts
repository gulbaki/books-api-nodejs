import { EntityRepository, Repository } from "typeorm";
import { Book } from "../models";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    public findOneById(id: number): Promise<Book> {
        return this.manager.findOne(Book, {where: {id}});
    }

}
