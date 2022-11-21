import express from 'express';
import { getMovieById, getMovieList, createMovie } from '../db/queries/movieQueries';

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
router.put('/:id', (req, res) => {
  res.json({ msg: 'update movie' });
});
router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete a movie' });
});

export default router;
