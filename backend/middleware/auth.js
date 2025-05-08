import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided.' });
    }

    const token = authHeader;
    
    try {
      jwt.verify(token, JWT_SECRET);
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res
          .status(401)
          .json({ message: 'Token expired. Please log in again.' });
      }
      return res.status(500).json({
        message: 'Error during token verification.',
        error: error.message,
      });
    }
  };

export {verifyToken}