import express from 'express';
import {
  getMovieById,
  getMovieList,
  createMovie,
  updateMovie,
  deleteMovie,
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

  await updateMovie(id, req.body);
  res.json({ msg: 'update movie' });
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

export default router;
