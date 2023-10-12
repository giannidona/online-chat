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
  if (!req.session.isLogged) {
    return res.redirect("/login");
  }
  const username = req.session.username;
  res.render("chat", { username });
});

router.get("/profile", async (req, res) => {
  if (!req.session.isLogged) {
    return res.redirect("/login");
  }

  const { username, email, image, status } = req.session;

  res.render("profile", { username, email, image, status });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

export default router;
