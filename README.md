# Random Quote API

### Description:

API created to serve quotes to use on [FreeCodeCamp Random Quote Machine Challenge](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine).

You can access it [here](https://lucas-rodrigues20-random-quote-api.glitch.me).

#### How to run

* Run `npm install` to get the dependencies;
* Run `npm run init-db` to generate database, create tables and insert default data;
* Run `npm start` to start the server;
* Run `npm run dev` to start the server in development mode.

__Obs.:__ This project uses SQLite as database, so no additional configuration is needed.

#### Other commands

* `npm run migrations`: generate database and create tables.
* `npm run seeders`: insert sample data.

__Obs.:__ `npm run init-db` is just a shortcut to run the two commands above.

#### Endpoints

1. `GET /`
	* Returns info about the available routes.
2. `GET /quotes`
	* Returns all quotes available.
3. `GET /quotes/random`
	* Returns a random quote.
