import { Router } from "express";

export default (router: Router): void => {
  router.get("/users/find-all", (_req, res) => {
    const user = [
      {
        name: "Lucas",
        email: "lucasvalbusagit@gmail.com",
      },
    ];

    return res.status(200).json(user);
  });
};
