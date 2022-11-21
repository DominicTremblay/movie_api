import express from 'express';
import { createPerson, deletePerson, getPersonById, getPersons, updatePerson } from '../db/queries/personQueries';


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const persons = await getPersons();
    res.json(persons);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const person = await getPersonById(id);
    res.json(person);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const person = await createPerson(req.body);
    res.json(person);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const person = await updatePerson(id, req.body);
    res.json(person);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const person = await deletePerson(id);
    res.json(person);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

export default router;
