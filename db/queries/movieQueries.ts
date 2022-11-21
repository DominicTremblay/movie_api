import { Prisma } from '@prisma/client';
import prisma from '../connection';

export const getMovieList = async () => {
  const movieList = await prisma.movie.findMany({
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

export const getMovieById = async (id) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id,
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
  return movie;
};

export const createMovie = async ({
  title,
  release_date,
  runtime,
  genres,
  cast,
}) => {
  const genresFound = await prisma.genre.findMany({
    where: {
      genre: {
        in: genres,
      },
    },
  });

  const genreIds = genresFound.map((genre) => genre.id);

  const castNames = cast.map(
    (member) => `${member.first_name} ${member.last_name}`
  );

  // const castNames = ['Tom Hanks', 'Tom Cruise'];
  console.log({ castNames });

  const personsFound: any = await prisma.$queryRaw`
      SELECT * FROM "Person"
      WHERE concat(first_name, ' ', last_name)
      IN (${Prisma.join(castNames)})`;

  console.log(personsFound);

  const namesFound = personsFound.map(
    ({ first_name, last_name }) => `${first_name} ${last_name}`
  );

  const personsToAdd = cast.filter(
    ({ first_name, last_name }) =>
      !namesFound.includes(`${first_name} ${last_name}`)
  );

  const persons = await prisma.person.createMany({
    data: personsToAdd.map(({ first_name, last_name }) => ({
      first_name,
      last_name,
    })),
  });

  console.log({ personsToAdd });
  console.log({ persons });
};
