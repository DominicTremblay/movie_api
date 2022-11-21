import prisma from '../connection';

export const getGenres = async () => {
  const genres = await prisma.genre.findMany();

  return genres;
};

export const getGenreById = async (id) => {
  const genre = await prisma.genre.findUnique({
    where: {
      id,
    },
  });

  return genre;
};

export const createGenre = async (genreInfo) => {
  const genre = await prisma.genre.create({
    data: genreInfo,
  });

  return genre;
};

export const updateGenre = async (id, genreInfo) => {
  const genre = await prisma.genre.update({
    where: {
      id,
    },
    data: genreInfo,
  });
  return genre;
};

export const deleteGenre = async (id) => {
  const genre = await prisma.genre.delete({
    where: {
      id,
    },
  });

  return genre;
};
