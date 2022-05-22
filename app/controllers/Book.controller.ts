import { Request, Response } from "express";
import { Book } from "../models";
import { BookService, UserBookService } from "../services";
import { Controller } from "./Controller";

export class BookController extends Controller {

    private bookService: BookService;
    private userBookService: UserBookService;
    private book: Book;

    constructor(req: Request, res: Response) {
        super(req, res);
        this.book = new Book();
        this.bookService = new BookService();
        this.userBookService = new UserBookService();
    }

    public async all(): Promise<Response> {
        const bookList = await this.bookService.find();
        return this.res.send(bookList);
    }

    public async find(): Promise<Response> {
        const { id } = this.req.params as unknown as { id: number };

        const book = await this.bookService.findOneById(id);
        const avarage = await this.userBookService.avarageCalc(id);
        if (avarage.score !== null) book.score = avarage.score

        if (book) {
            return this.res.status(200).send(book);
        } else {
            return this.res.status(404).send({ message: "not found" });
        }
    }

    public async create(): Promise<Response> {
        const { name } = this.req.body as { name: string };
        this.book.name = name;
        try {
            const result = await this.bookService.save(this.book);
            return this.res.status(201).send(result);
        } catch (ex) {
            return this.res.status(400).send({ message: "ERROR" });
        }
    }



}
