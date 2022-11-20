import { PrismaClient } from '@prisma/client';
import { genres } from './seeds/genres';
import { movies } from './seeds/movies';
import { persons } from './seeds/persons';

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
