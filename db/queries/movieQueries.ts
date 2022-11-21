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

export const createMovie = async ({ title, release_date, runtime }) => {
  const movie = await prisma.movie.create({
    data: {
      title,
      release_date: new Date(release_date),
      runtime_mins: Number(runtime),
    },
  });

  return movie;
};
