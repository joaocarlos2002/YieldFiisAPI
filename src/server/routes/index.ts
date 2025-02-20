import { Router } from "express";

const router = Router();

router.get("/teste", (req, res) => {
  res.json(req);
});

router.post("/", (_, res) => {
  res.status(200).send("Hello, world!");
});

export { router };
