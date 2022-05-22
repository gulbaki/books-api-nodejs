import { EntityRepository, Repository } from "typeorm";
import { User, UserBook } from "../models";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public async findOneById(id: number): Promise<User> {
        return this.manager.findOne(User, { where: { id }});
    }

}
