import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { UserBook } from "../models";

@EntityRepository(UserBook)
export class UserBookRepository extends Repository<UserBook> {

    public findOneById(id: number): Promise<UserBook[]> {
        return this.find({
            relations: ['user', 'book'],
            where: {
                user: {
                    id: id
                }
            }
        })
    }

    public findtwoById(id: number, bookId: number): Promise<UserBook> {
        return this.findOne({
            where: {
                user: {
                    id: id
                },
                book: {
                    id: bookId
                }
            }

        })
    }
    public avarageCalc(id: number): Promise<any> {

        return this.manager.createQueryBuilder().select("(AVG(user_score)) as score")
            .from(UserBook, "user_book")
            .where("book_id = :id and user_score != :score", { id: id, score: -1 })
            .getRawOne();
    }


}



