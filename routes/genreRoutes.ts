import express from 'express';
import {
  createGenre,
  deleteGenre,
  getGenreById,
  getGenres,
  updateGenre,
} from '../db/queries/genreQueries';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const genres = await getGenres();
    res.json(genres);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const genre = await getGenreById(id);
    res.json(genre);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const genre = await createGenre(req.body);
    res.json(genre);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const genre = await updateGenre(id, req.body);
    res.json(genre);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const genre = await deleteGenre(id);
    res.json(genre);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

export default router;
