import express from 'express';
import {
  pet,
  petId,
  pets,
  updatePet,
  deletePet,
  myPet
} from '../controllers/pet.controller';
import checkAuth from '../middleware/checkAuth';
const router = express.Router();

router.route('/pets').get(pets);
router.route('/pet/:id').get(petId);
router.route('/mypet').get(myPet);
router
  .route('/pet')
  .post(checkAuth, pet)
  .put(checkAuth, updatePet)
  .delete(checkAuth, deletePet);

export default router;
