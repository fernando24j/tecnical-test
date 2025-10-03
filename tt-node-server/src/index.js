import dotenv from 'dotenv';
import app from './app.js';
import { dbConnection } from './models/mongo.connection.js';

dotenv.config();


const PORT = process.env.PORT || 5000;

async function startServer() {
  await dbConnection();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
  });
}

startServer();
