import express from "express";
import {
  pet,
  petId,
  pets,
  updatePet,
  deletePet,
  myPet
} from "../controllers/pet.controller";
import cloudinary from "cloudinary";
import multer from "multer";
import cloudinaryStorage from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "dda1jyofd",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "dogs",
  allowedFormats: ["jpg", "png"]
});

const parser = multer({ storage });

import checkAuth from "../middleware/checkAuth";
const router = express.Router();

router.route("/pets").get(pets);
router.route("/pet/:id").get(petId);
router.route("/mypet").get(checkAuth, myPet);
router
  .route("/pet")
  .post(checkAuth, parser.single("image"), pet)
  .put(checkAuth, updatePet)
  .delete(checkAuth, deletePet);

export default router;
