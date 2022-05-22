Nodejs + Typescript + Expressjs + Typeorm + Mysql 
====================================================
# Book-api
An api system where the user borrows a book from the library and returns it

# Start App
When execute any of this commands the app start with clustering, creating many cluster apps depending of the numbers of CPU's your computer had.
### Development: In Development mode, the express app is started with nodemon for automatic refresh when changes are made.
	npm run dev
### Test: Run test in development environment
	npm test
### Production: Run app in production environment
	npm start

API endpoints
--------------------


`/users` Post - User Create

`/users`  Get - All User Get

`/users/:id` Get - One User Get

`/users/:id/borrow/:bookId` Put - Borrow Book

`/users/:id/return/:bookId` Post - Return Book

`/books` Post - Book Create

`/books`  Get - All Book Get

`/books/:id` Get - One Book Get




# Install
1. First clone this repository.
		
		https://github.com/gulbaki/books-api-nodejs.git
		
2. Download all dependencies.

		npm install
		
3. Edit the file `./env` and add config database like:

```js
DB=test
PASSWORD=root
PORT_DB=3306
SERVER=127.0.0.1
USER_DB=root
```

4. Edit the file `./config.ts` with your own settings:

```js
const LOCAL_CONFIGURATION = {
    DB: "test",
    DIALECT: "mysql",
    PASSWORD: "",
    PORT_DB: 3306,
    SERVER: "127.0.0.1",
    USER_DB: "root",
};

const PRODUCTION_CONFIGURATION = {
    DB: process.env.DB || "prod",
    DIALECT: process.env.DIALECT || "mysql",
    PASSWORD: process.env.PASSWORD || "",
    PORT_DB: Number(process.env.PORT_DB) || 3306,
    SERVER: process.env.SERVER || "localhost",
    USER_DB: process.env.USER_DB || "root",
};

export const config = {
    SECRET: "HltH3R3",
    PORT_APP: 1344,
    DATABASE: process.env.NODE_ENV === 'PRODUCTION' ? PRODUCTION_CONFIGURATION : LOCAL_CONFIGURATION
}
```


