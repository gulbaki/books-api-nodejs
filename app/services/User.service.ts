import { getCustomRepository,getRepository } from "typeorm";
import { User, UserBook } from "../models";

import { UserRepository, UserBookRepository} from "../repository";
export class UserService {

    public async findOneById(id: number): Promise<User> {
       
        return getCustomRepository(UserRepository).findOneById(id);
    }

    public find(): Promise<User[]> {
        return getCustomRepository(UserRepository).find();
    }


    public save(User: User): Promise<User> {
        return getCustomRepository(UserRepository).save(User);
    }

}
