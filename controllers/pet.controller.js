import express from 'express';
import Pet from '../models/Pet.model';
const router = express.Router();

router.get('/pet', async (req, res) => {
  try {
    const pets = await Pet.find({});
    return res.status(200).json({ pets });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/pet/:id', async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = await Pet.findById({ id: petId });
    return res.status(200).json({ pet });
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
