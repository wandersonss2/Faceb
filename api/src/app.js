const express = require('express');
const path = require('path');
const connectDB = require('../config/db');
const accountRoutes = require('./routes/accountRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Servir arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Routes
app.use('/api/accounts', accountRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
