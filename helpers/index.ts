export const formatMovie = (movieInfo) => {
  interface Movie {
    title?: string;
    runtime_mins?: number;
    release_date?: Date;
  }

  const movie: Movie = {};

  if (movieInfo.title) {
    movie.title = movieInfo.title;
  }

  if (movieInfo.runtime_mins) {
    movie.runtime_mins = Number(movieInfo.runtime_mins);
  }

  if (movieInfo.release_date) {
    movie.release_date = new Date(movieInfo.release_date);
  }

  return movie;
};
