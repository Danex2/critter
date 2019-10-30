import express from 'express';
import User from '../models/User.model';
import Pet from '../models/Pet.model';
import checkAuth from '../middleware/checkAuth';
const router = express.Router();

router.get('/pet', async (req, res) => {
  try {
    const pets = await Pet.find({}, '_id name image createdAt breed');
    return res.status(200).json({ pets });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/pet/:id', async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = await Pet.findById({ _id: petId }).populate(
      'postedBy',
      'contactInfo.email contactInfo.phone username'
    );
    return res.status(200).json({ pet });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/pet', checkAuth, async (req, res) => {
  try {
    const { name, breed, image, date, lat, long, info, found } = req.body;
    const user = await User.findById({ _id: req.data.id });
    if (user.pet) {
      return res.status(400).json({
        message:
          'It seems you already have an active missing pet ad, if you want to update the ad please do so in the settings.'
      });
    }
    const pet = await Pet.create({
      name,
      breed,
      image,
      lastSeen: {
        date,
        location: {
          lat,
          long
        }
      },
      additionalInfo: info,
      found,
      postedBy: user.id
    });
    await User.findByIdAndUpdate({ _id: req.data.id }, { pet: pet.id });
    return res.status(201).json({ pet });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.put('/pet', checkAuth, async (req, res) => {
  try {
    const { found, image, info } = req.body;
    const updatedPet = await Pet.findOneAndUpdate(
      { postedBy: req.data.id },
      { found, image, info },
      { new: true }
    );
    return res.status(200).json(updatedPet);
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
