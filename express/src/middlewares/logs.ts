import { RabbitmqServer } from "@/providers/rabbitmq/rabbitmq-server";
import { Request, Response, NextFunction } from "express";
import env from "@/configs/envs";

export default async (req: Request, res: Response, next: NextFunction) => {
  const payload = {
    username: req["user"]?.["username"] ?? "invalid_user",
    path: req.originalUrl,
    method: req.method,
    application: "express",
    date: new Date(),
  };

  const server = new RabbitmqServer(env.rabbitmq_uri);
  await server.start();
  await server.publishInExchenge(
    "amq.direct",
    "nest_route",
    JSON.stringify(payload)
  );

  next();
};
