import express from 'express';
import * as testController from '../controllers/test.controller.js';

const router = express.Router();

// Test routes
router.get('/', testController.getTest);
router.post('/', testController.createTest);

export default router;
