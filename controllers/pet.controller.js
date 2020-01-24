import User from "../models/User.model";
import Pet from "../models/Pet.model";

const pets = async (req, res) => {
  try {
    const pets = await Pet.find({}, "_id name image updatedAt breed lastSeen");
    return res.status(200).json({ pets });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const petId = async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = await Pet.findById({ _id: petId }).populate(
      "postedBy",
      "contactInfo.email contactInfo.phone username"
    );
    return res.status(200).json({ pet });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const myPet = async (req, res) => {
  try {
    /*const data = await User.findById(
      { _id: req.data.id },
      { username: 0, password: 0, createdAt: 0, updatedAt: 0, _id: 0 }
    ).populate('pet');*/
    const data = await Pet.findOne({ postedBy: req.data.id }).populate(
      "postedBy",
      "contactInfo.email contactInfo.phone username"
    );
    return res.status(200).json({ data });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const pet = async (req, res) => {
  try {
    const { name, breed, lastSeen, address, info } = req.body;
    if (!name || !req.file) {
      return res
        .status(400)
        .json({ error: "The name and image are required." });
    }

    const user = await User.findById({ _id: req.data.id });
    if (user.pet) {
      return res.status(400).json({
        error:
          "It seems you already have an active missing pet ad, if you want to update the ad please do so in My Account."
      });
    }
    const pet = await Pet.create({
      name,
      breed,
      image: req.file.secure_url,
      lastSeen,
      address,
      additionalInfo: info,
      postedBy: user.id
    });
    await User.findByIdAndUpdate({ _id: req.data.id }, { pet: pet.id });
    return res.status(201).json({ pet });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

const updatePet = async (req, res) => {
  try {
    const { image, info, email, phone } = req.body;
    await Pet.findOneAndUpdate(
      { postedBy: req.data.id },
      { image, info },
      { new: true }
    );

    await User.findByIdAndUpdate(
      { _id: req.data.id },
      {
        contactInfo: {
          email,
          phone
        }
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Ad successfully updated."
    });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const deletePet = async (req, res) => {
  try {
    await Pet.findOneAndDelete({ postedBy: req.data.id });
    await User.findOneAndUpdate({ _id: req.data.id }, { $unset: { pet: "" } });
    return res.status(200).json({
      message: "Ad deleted."
    });
  } catch (e) {
    return res.status(500).json(e);
  }
};

export { pets, petId, myPet, pet, updatePet, deletePet };
