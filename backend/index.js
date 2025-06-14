const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const predictRoutes = require('./routes/predictRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use('/auth', authRoutes);
app.use('/model', predictRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
