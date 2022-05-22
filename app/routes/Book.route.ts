import { BookController } from "../controllers";
import { Validator } from "../middlewares";
import { createBook } from "../schemas";
import { Router } from "./Router";

export class BookRouter extends Router {
    constructor() {
        super(BookController);
        this.router
            .get("/", this.handler(BookController.prototype.all))
            .get("/:id", this.handler(BookController.prototype.find))
            .post("/", [ Validator(createBook) ], this.handler(BookController.prototype.create))
    }
}
