import { Router } from "express";

const router = Router();

router.get("/register", async (req, res) => {
  if (req.session.isLogged) {
    return res.redirect("/profile");
  }

  res.render("register");
});

router.get("/login", async (req, res) => {
  if (req.session.isLogged) {
    return res.redirect("/profile");
  }

  res.render("login");
});

router.get("/chat", async (req, res) => {
  const username = req.session.username;
  res.render("chat", { username });
});

router.get("/profile", async (req, res) => {
  const { username, email, image } = req.session;

  res.render("profile", { username, email, image });
});

export default router;
