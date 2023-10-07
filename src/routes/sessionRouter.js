import { Router } from "express";
import { uploader } from "../middlewares/multer.js";
import { userModel } from "../models/userModel.js";

const router = Router();

router.post("/register", uploader.single("file"), async (req, res) => {
  if (req.session.isLogged) {
    return res.redirect("/profile");
  }

  try {
    const { username, email, password } = req.body;
    const image = req.file.originalname;
    const user = await userModel.create({ username, email, password, image });
    console.log(user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  if (req.session.isLogged) {
    return res.redirect("/profile");
  }

  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username, password }).lean();

    req.session.username = user.username;
    req.session.email = user.email;
    req.session.image = user.image;
    req.session.isLogged = true;

    res.redirect("/profile");
  } catch (error) {
    res.send(error);
  }
});

export default router;
