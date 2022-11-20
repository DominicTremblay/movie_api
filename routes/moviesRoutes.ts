import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'list of movies' });
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
