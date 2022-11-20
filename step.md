# Creating an API with Prisma

## Prisma setup

1. Install Dependencies

* `npm i -D @types/node @types/express typescript tsc-watch ts-node`
* `npm i prisma @prisma/client`

2. Update npm scripts

```json
  "scripts": {
    "start": "node dist/src/index.js",
    "dev": "tsc-watch --onSuccess \"node ./dist/server.js\"",
    "seed": "ts-node primsa/seed.ts",
    "build": "tsc"
  },
```

3. Initalize Prisma

* `npx prisma init`

4. Enter the db connection string in .env and .env.example

* `DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>"`

5. Add tsconfig.json file

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist",
    "strict": false,
    "moduleResolution": "node",
    "lib": [
      "ESNext"
    ],
    "esModuleInterop": true
  }
}

```

6. Update db/connection.js with the following:

```js
import {
    PrismaClient
} from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
```

7. Update file extension to typescript

* change file extension to `.ts`
* update all imports to remove `.js` extension

8. Delete the route files

## Create the DB files

1. Create The Schema

```prisma

model Movie {
  id           Int          @id @default(autoincrement())
  title        String
  release_date String
  runtime_mins Int
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt
  movie_casts  MovieCast[]
  movie_genres MovieGenre[]
}

model MovieCast {
  id             Int      @id @default(autoincrement())
  character_name String
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  movie          Movie?   @relation(fields: [movieId], references: [id])
  movieId        Int?
  person         Person?  @relation(fields: [personId], references: [id])
  personId       Int?
}

model Person {
  id          Int         @id @default(autoincrement())
  first_name  String
  last_name   String
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  movie_casts MovieCast[]
}

model MovieGenre {
  id        Int      @id @default(autoincrement())
  movie     Movie?   @relation(fields: [movieId], references: [id])
  movieId   Int?
  genre     Genre?   @relation(fields: [genreId], references: [id])
  genreId   Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Genre {
  id           Int          @id @default(autoincrement())
  movie_genres MovieGenre[]
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt
}
```

2. Create the seed files

2.1 Create the seeds/genres.ts file

```js
export const genres = [{
        genre: 'Action',
    },
    {
        genre: 'Adventure',
    },
    {
        genre: 'Comedy',
    },
    {
        genre: 'Crime',
    },
    {
        genre: 'Documentary',
    },
    {
        genre: 'Drama',
    },
    {
        genre: 'Fantasy',
    },
    {
        genre: 'Horror',
    },
    {
        genre: 'Musical',
    },
    {
        genre: 'Mystery',
    },
    {
        genre: 'Romance',
    },
    {
        genre: 'Science Fiction',
    },
    {
        genre: 'Thriller',
    },
];
```

2.2 Create the seeds/persons.ts file

```js
export const persons = [{
        first_name: 'Amber',
        last_name: 'Midthunter',
    },
    {
        first_name: 'Dakota',
        last_name: 'Beavers',
    },
    {
        first_name: 'Dan',
        last_name: 'DiLiegro',
    },
    {
        first_name: 'Tom',
        last_name: 'Cruise',
    },
    {
        first_name: 'Val',
        last_name: 'Kilmer',
    },
    {
        first_name: 'Miles',
        last_name: 'Teller',
    },
    {
        first_name: 'Jennifer',
        last_name: 'Connelly',
    },
    {
        first_name: 'John',
        last_name: 'Hamm',
    },
    {
        first_name: 'Monica',
        last_name: 'Barbaro',
    },
    {
        first_name: 'Michelle',
        last_name: 'Yeoh',
    },
    {
        first_name: 'Stephanie',
        last_name: 'Hsu',
    },
    {
        first_name: 'Jamie Lee',
        last_name: 'Curtis',
    },
    {
        first_name: 'Tom',
        last_name: 'Hanks',
    },
    {
        first_name: 'Austin',
        last_name: 'Butler',
    },
    {
        first_name: 'Olivia',
        last_name: 'DeJonge',
    },
];
```

2.3 Create the seeds/movies.ts file

```js
export const movies = [{
        title: 'Prey',
        release_date: new Date('2022-08-22'),
        runtime_mins: 99,
        movie_genres: [1, 2],
        movie_casts: [{
                character_name: 'Naru',
                id: 1,
            },
            {
                character_name: 'Taabe',
                id: 2,
            },
            {
                character_name: 'Predator',
                id: 3,
            },
        ],
    },
    {
        title: 'Top Gun: Maverick',
        release_date: new Date('2022-05-22'),
        runtime_mins: 130,
        movie_genres: [1, 5],
        movie_casts: [{
                character_name: "Capt. Pete 'Maverick' Mitchell",
                id: 4,
            },
            {
                character_name: "Adm. Tom 'Iceman' Kazansky",
                id: 5,
            },
            {
                character_name: "Lt. Bradley 'Rooster' Bradshaw",
                id: 6,
            },
            {
                character_name: 'Penny Benjamin',
                id: 7,
            },
            {
                character_name: "Adm. Beau 'Cyclone' Simpson",
                id: 8,
            },
            {
                character_name: "Lt. Natasha 'Phoenix' Trace",
                id: 9,
            },
        ],
    },
    {
        title: 'Everything Everywhere All at Once',
        release_date: new Date('2022-03-25'),
        runtime_mins: 139,
        movie_genres: [1, 2, 3],
        movie_casts: [{
                character_name: 'Evelyn Wang',
                id: 10,
            },
            {
                character_name: 'Joy Wang',
                id: 11,
            },
            {
                character_name: 'Deirdre Beaubeirdre',
                id: 12,
            },
        ],
    },
    {
        title: 'Elvis',
        release_date: new Date('2022-06-24'),
        runtime_mins: 159,
        movie_genres: [6, 9],
        movie_casts: [{
                character_name: 'Colonel Tom Parker',
                id: 13,
            },
            {
                character_name: 'Elvis',
                id: 14,
            },
            {
                character_name: 'Priscilla',
                id: 15,
            },
        ],
    },
];
```

2.4 create `prisma/seed.ts`

```js
import {
    PrismaClient
} from '@prisma/client';
import {
    genres
} from './seeds/genres';
import {
    movies
} from './seeds/movies';
import {
    persons
} from './seeds/persons';

const prisma = new PrismaClient();

const seedGenres = async (genres) => {
    for (let genre of genres) {
        await prisma.genre.create({
            data: genre,
        });
    }
};

const seedPersons = async (persons) => {
    for (let person of persons) {
        await prisma.person.create({
            data: person,
        });
    }
};

const seedMovies = async (movies) => {
    for (let movie of movies) {
        await prisma.movie.create({
            data: {
                title: movie.title,
                release_date: movie.release_date,
                runtime_mins: movie.runtime_mins,
                movie_genres: {
                    create: movie.movie_genres.map((genreId) => ({
                        genre: {
                            connect: {
                                id: genreId,
                            },
                        },
                    })),
                },
                movie_casts: {
                    create: movie.movie_casts.map((cast) => ({
                        character_name: cast.character_name,
                        person: {
                            connect: {
                                id: cast.id,
                            },
                        },
                    })),
                },
            },
        });
    }
};

const run = async () => {
    await seedGenres(genres);
    await seedPersons(persons);
    await seedMovies(movies);
};

run()
    .catch((err) => {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
```

## Create the Route Files

1. Create the basic CRUD for `routes/moviesRoutes.ts`

```js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'list of movies'
    });
});

router.get('/:id', (req, res) => {
    res.json({
        msg: 'get one movie'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'create movie'
    });
});
router.put('/:id', (req, res) => {
    res.json({
        msg: 'update movie'
    });
});
router.delete('/:id', (req, res) => {
    res.json({
        msg: 'delete a movie'
    });
});

export default router;
```

2. Add moviesRoutes to server.ts

```js
import {
    default as moviesRoutes
} from './routes/moviesRoutes';
app.use('/api/movies', moviesRoutes);
```

3. Create a `db/queries/movieQueries/ts` file

3.1 Create the `getMovieList` query

```js
import prisma from '../connection';

export const getMovieList = async () => {
    const movieList = await prisma.movie.findMany({
        where: {
            movie_genres: {
                some: {},
            },
        },
        include: {
            movie_genres: {
                include: {
                    genre: true,
                },
            },
            movie_casts: {
                include: {
                    person: true,
                },
            },
        },
    });

    return movieList;
};
```
