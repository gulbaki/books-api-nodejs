import { UserController } from "../controllers";
import { Validator } from "../middlewares";
import { createUser, returnBook } from "../schemas";
import { Router } from "./Router";

export class UserRouter extends Router {
    constructor() {
        super(UserController);
        this.router
            .get("/", this.handler(UserController.prototype.all))
            .get("/:id", this.handler(UserController.prototype.find))
            .post("/", [ Validator(createUser) ], this.handler(UserController.prototype.create))
            .post("/:id/borrow/:bookId",  this.handler(UserController.prototype.borrowBook))
            .post("/:id/return/:bookId", [ Validator(returnBook)], this.handler(UserController.prototype.returnBook))
    }
}
