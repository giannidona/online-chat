import { Router } from "express";

const router = Router();

router.get("/register", async (req, res) => {
  res.render("register");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/chat", async (req, res) => {
  res.render("chat");
});

router.get("/profile", async (req, res) => {
  res.render("profile");
});

router.get("/home", async (req, res) => {
  res.render("home");
});

export default router;
