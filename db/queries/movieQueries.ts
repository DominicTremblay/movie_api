import prisma from '../connection';
import { formatMovie } from '../../helpers/index';
import { createPerson } from './personQueries';

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

export const deleteMovie = async (id) => {
  const movie = await prisma.movie.delete({
    where: {
      id,
    },
  });

  return movie;
};

export const updateMovie = async (id, movieInfo) => {
  const movie = await prisma.movie.update({
    where: {
      id,
    },
    data: formatMovie(movieInfo),
  });
  return movie;
};

export const addMovieCharacter = async (movieId, characterName, personId) => {
  console.log(movieId, characterName, personId);

  const movieCast = prisma.movieCast.create({
    data: {
      character_name: characterName,
      person: {
        connect: {
          id: personId,
        },
      },
      movie: {
        connect: {
          id: movieId,
        },
      },
    },
  });

  return movieCast;
};
