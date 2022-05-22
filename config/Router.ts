import * as express from "express";
import {  BookRouter, UserRouter } from "../app/routes";
import { config } from "../config";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

const Book = new BookRouter();
const User = new UserRouter();


export const ROUTER: IROUTER[] = [ {
    handler: Book.router,
    middleware: [
      
    ],
    path: "/books",
}, {
    handler: User.router,
    middleware: [],
    path: "/users",
}];
