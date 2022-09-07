import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import env from "@/configs/envs";

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.sendStatus(401).json({ error: "Missing token" });

  verify(token, env.token_screet, (err: Error, user: object) => {
    if (err) return res.sendStatus(403).json({ error: "Unauthorized" });
    const payload = {
      username: user["username"],
      token,
    };

    req["user"] = payload;

    next();
  });
};
