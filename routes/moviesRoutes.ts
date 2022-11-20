import express from 'express';
import { getMovieList } from '../db/queries/movieQueries';

const router = express.Router();

router.get('/', async (req, res) => {
  const movieList = await getMovieList();
  res.json({ data: movieList });
});

router.get('/:id', (req, res) => {
  res.json({ msg: 'get one movie' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'create movie' });
});
router.put('/:id', (req, res) => {
  res.json({ msg: 'update movie' });
});
router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete a movie' });
});

export default router;
