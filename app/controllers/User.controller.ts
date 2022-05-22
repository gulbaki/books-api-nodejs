import { Request, Response } from "express";
import { User, UserBook, Book } from "../models";
import { UserService, BookService, UserBookService } from "../services";
import { Controller } from "./Controller";

export class UserController extends Controller {

    private userService: UserService;
    private bookService: BookService;
    private userBookService: UserBookService;
    private user: User;
    private book: Book;
    private userBook: UserBook;

    constructor(req: Request, res: Response) {
        super(req, res);
        this.user = new User();
        this.book = new Book();
        this.userBook = new UserBook();
        this.userService = new UserService();
        this.bookService = new BookService();
        this.userBookService = new UserBookService();
    }

    public async all(): Promise<Response> {
        const userList = await this.userService.find();
        return this.res.send(userList);
    }

    public async find(): Promise<Response> {
        const { id } = this.req.params as unknown as { id: number };
        const schema = {
            id: 0,
            name: "",
            books: {}

        };
        const present = [{}]
        const past = [{}];

        const userBook = await this.userBookService.findOneById(id);
        if (userBook.length < 1) {
            const user = await this.userService.findOneById(id);
            if (user)
                return this.res.status(200).send(user);
            return this.res.status(404).send({ message: "not found" });
        }

        for (const key in userBook) {
            if (userBook[key].status === 1) {
                present[key] = {
                    "name": userBook[key].book.name
                }
            } if (userBook[key].status === 2) {
                past[key] = {
                    "name": userBook[key].book.name,
                    "userScore": userBook[key].user_score
                }
            }

            schema.id = id
            schema.name = userBook[0].user.name
            schema.books = { past, present }
        }
        return this.res.status(200).send(schema);
    }

    public async create(): Promise<Response> {
        const { name } = this.req.body as { name: string };
        this.user.name = name;
        try {
            const result = await this.userService.save(this.user);
            return this.res.status(201).send(result);
        } catch (ex) {
            return this.res.status(404).send({ message: "ERROR" });
        }
    }

    public async borrowBook(): Promise<Response> {
        const { id, bookId } = this.req.params as unknown as { id: number, bookId: number };

        const user = await this.userService.findOneById(id);
        const book = await this.bookService.findOneById(bookId);

        if (!user || !book) return this.res.status(404).send({ message: "not found" });

        this.user.id = user.id
        this.book.id = book.id
        this.userBook.user = this.user
        this.userBook.book = this.book
        this.userBook.status = 1

        try {
            const borrow = await this.userBookService.save(this.userBook);
            return this.res.status(201).send({ borrow: borrow });
        } catch (ex) {
            console.log(ex);
            return this.res.status(500).send({ message: "hata " });
        }
    }

    public async returnBook(): Promise<Response> {
        const { id, bookId } = this.req.params as unknown as { id: number, bookId: number };
        const { score } = this.req.body as { score: number };

        this.user.id = id
        this.book.id = bookId
        this.userBook.user = this.user
        this.userBook.book = this.book
        this.userBook.user_score = score
        this.userBook.status = 2

        try {

            const property = await this.userBookService.findtwoById(id, bookId);
            this.userBook.id = property.id
           
            const returnBook = await this.userBookService.update(this.userBook);


            return this.res.status(201).send({ returnBook: returnBook });
        } catch (ex) {
            console.log(ex);
            return this.res.status(500).send({ message: "hata " });
        }
    }



}
