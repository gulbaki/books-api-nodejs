import { getCustomRepository } from "typeorm";
import { UserBook } from "../models";
import { UserBookRepository } from "../repository";

export class UserBookService {

    public findOneById(id: number): Promise<UserBook[]> {
        return getCustomRepository(UserBookRepository).findOneById(id);
    }

    public findtwoById(id: number, bookId: number): Promise<UserBook> {
        return getCustomRepository(UserBookRepository).findtwoById(id, bookId);
    }

    public find(): Promise<UserBook[]> {
        return getCustomRepository(UserBookRepository).find();
    }

    public save(UserBook: UserBook): Promise<UserBook> {
        return getCustomRepository(UserBookRepository).save(UserBook);
    }
    public async update(UserBook: UserBook): Promise<UserBook> {

        return getCustomRepository(UserBookRepository).save(UserBook);
    }
    public async avarageCalc(id: number): Promise<any> {

        return getCustomRepository(UserBookRepository).avarageCalc(id);
    }

}
