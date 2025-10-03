import express from 'express';
import cors from 'cors';
import { User } from './models/mongo.models.js';

// Routes imports
import testRoutes from './routes/test.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', testRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to TT Node Server',
    version: '1.0.0',
    status: 'running'
  });
});


// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

export default app;
