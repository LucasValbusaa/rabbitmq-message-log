import { Express, json } from "express";

export const setupMiddleware = (app: Express): void => {
  app.use(json());
  app.use((_req, res, next) => {
    res.type("json");
    next();
  });
};
