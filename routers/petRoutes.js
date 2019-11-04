import express from 'express';
import {
  pet,
  petId,
  pets,
  updatePet,
  deletePet,
  myPet
} from '../controllers/pet.controller';
const router = express.Router();

router.route('/pets').get(pets);
router.route('/pet/:id').get(petId);
router.route('/mypet').get(myPet);
router
  .route('/pet')
  .post(pet)
  .put(updatePet)
  .delete(deletePet);

export default router;
