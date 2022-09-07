import { fakeUser } from "@/data/fake-user";
import { compareKeys } from "@/validators/keys-validation";
import env from "@/configs/envs";
import { Router } from "express";
import { sign } from "jsonwebtoken";

export default (router: Router): void => {
  router.post("/users/authenticate", (req, res) => {
    const isValidKeys = compareKeys(fakeUser, req.body);
    if (!isValidKeys) return res.status(400).json({ error: "Missing params" });

    if (fakeUser.password !== req.body.password) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const token = sign(fakeUser, env.token_screet);

    return res.json({ token });
  });
};
