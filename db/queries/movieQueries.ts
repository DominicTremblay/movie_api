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
