import { Router } from "express";

const router = Router();

router.get("/profile", (req, res) => {
  res.render("profile");
});

export default router;
