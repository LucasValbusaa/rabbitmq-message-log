import { fakeUsers } from "@/data/fake-users";
import { compareKeys } from "@/validators/keys-validation";
import env from "@/configs/envs";
import { Router } from "express";
import { sign } from "jsonwebtoken";
import logs from "@/middlewares/logs";
import authenticate from "@/middlewares/authenticate";

export default (router: Router): void => {
  router.post("/login", async (req, res) => {
    for (const user of fakeUsers) {
      const isValidKeys = compareKeys(user, req.body);
      if (!isValidKeys)
        return res.status(400).json({ error: "Missing params" });
    }

    const found = fakeUsers.find((user) => user.password === req.body.password);
    if (!found) return res.status(404).json({ error: "User not found" });

    const token = sign({ username: req.body.name }, env.token_screet);

    return res.json({ token });
  });

  router.get("/data", authenticate, logs, (req, res) => {
    return res.json({ data: "any_data" });
  });
};
