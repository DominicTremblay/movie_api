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
    "module": "es6",
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

- change file extension to `.ts`
- update all imports to remove `.js` extension

8. Delete the route files
