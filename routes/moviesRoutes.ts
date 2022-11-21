import express from 'express';
import {
  getMovieById,
  getMovieList,
  createMovie,
  updateMovie,
  deleteMovie,
  addMovieCharacter,
} from '../db/queries/movieQueries';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movieList = await getMovieList();
    res.json({ movieList });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const movie = await getMovieById(id);
    res.json({ movie });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const movie = await createMovie(req.body);
    res.json({ movie });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);

  const movie = await updateMovie(id, req.body);
  res.json(movie);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const movie = await deleteMovie(id);
    res.json({ movie });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.post('/:id/casts', async (req, res) => {
  const movieId = Number(req.params.id);
  const { character_name: characterName } = req.body;
  const personId = Number(req.body.person_id);

  try {
    const movieCharacter = await addMovieCharacter(
      movieId,
      characterName,
      personId
    );

    res.json(movieCharacter);
  } catch (err) {
    console.log(err.message);
    res.json({ msg: err.message });
  }
});

export default router;
