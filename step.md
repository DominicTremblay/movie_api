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

2. Create the seed file

- create `prisma/seed.ts`
