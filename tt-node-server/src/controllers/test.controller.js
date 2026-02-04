// Test Controller
import { User } from '../models/mongo.models.js';
export const getTest = async (req, res) => {
  try {
    const users = await User.find({}).limit(20);

    res.json({
      message: 'Users retrieved successfully',
      timestamp: new Date().toISOString(),
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error in getTest',
      message: error.message
    });
  }
};

export const createTest = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validación básica
    if (!name || !email || !password) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'name, email and password are required'
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      status: 'Pending'
    });

    res.status(201).json({
      message: 'User created successfully',
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        status: newUser.status,
        createdAt: newUser.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error in createTest',
      message: error.message
    });
  }
};

