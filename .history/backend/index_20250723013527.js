
// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
