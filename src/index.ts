import { initServer, startServer } from "./api";
import Logger from "./utils/logger";

(async () => {
  const logger = new Logger();
  try {
    const server = await initServer();
    startServer(server);
  } catch (error) {
    logger.error(error.message);
  }
})();