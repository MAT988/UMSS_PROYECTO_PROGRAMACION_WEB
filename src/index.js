import Server from './config/server.config.js';
import { PORT } from './config/env.config.js';
import { connectDatabase } from './config/database.config.js';

async function startServer() {
  try {
    Server.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`);
    });
  } catch(error) {
    console.log("Error starting server", error);
  }
}

startServer();
connectDatabase();
