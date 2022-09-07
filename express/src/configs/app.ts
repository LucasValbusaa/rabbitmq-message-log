import express, { Express } from "express";
import env from "@/configs/envs";
import { setupMiddleware } from "@/configs/middleware";
import { setupRoutes } from "@/configs/routes";

export class App {
  private app: Express;

  private constructor() {
    this.app = express();
  }

  static start() {
    const server = new App();
    server.middleware();
    server.routes();
    server.listen();
  }

  private listen() {
    this.app.listen(env.port, () =>
      console.log(`Server is runner in http://localhost:${env.docker_port}`)
    );
  }

  private middleware() {
    setupMiddleware(this.app);
  }

  private routes() {
    setupRoutes(this.app);
  }
}
