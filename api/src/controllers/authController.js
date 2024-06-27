const authService = require('../services/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      const user = await authService.getUserByEmail(email); // Adiciona a busca pelo usuário
      res.json({ token, user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async register(req, res) {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profileImage: req.file ? req.file.path : null
      };
      const token = await authService.register(user);
      res.status(201).json({ token, user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
