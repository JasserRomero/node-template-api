import { env } from "./config";
import { Server } from "./presentation/server";

(() => {
  const { PORT, PUBLIC_PATH } = env;
  const server = new Server({ PORT, PUBLIC_PATH });
  server.start();
})();
