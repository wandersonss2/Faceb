// src/controllers/authController.js
const authService = require('../services/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async register(req, res) {
    try {
      const token = await authService.register(req.body);
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
