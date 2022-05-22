import { getCustomRepository } from "typeorm";
import { Book } from "../models";
import { BookRepository } from "../repository";

export class BookService {

    public findOneById(id: number): Promise<Book> {
        
        return getCustomRepository(BookRepository).findOneById(id);
    }

    public find(): Promise<Book[]> {
        return getCustomRepository(BookRepository).find({ select: ["id", "name"] });
    }

    public save(Book: Book): Promise<Book> {
        return getCustomRepository(BookRepository).save(Book);
    }

}
