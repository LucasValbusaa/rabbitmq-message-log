export default {
  port: process.env.NODE_PORT || 3000,
  docker_port: process.env.DOCKER_NODE_PORT || 3001,
  token_screet: process.env.TOKEN_SECRET || "KsGF-12@#4>mJJasdoqw14ZK*^CV",
  rabbitmq_uri: process.env.RABBITMQ_URI || "amqp://guest:guest@rabbitmq:5672",
};
