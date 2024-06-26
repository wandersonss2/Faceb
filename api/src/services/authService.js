// src/services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const accountRepository = require('../repositories/accountRepository');

class AuthService {
  async login(email, password) {
    const account = await accountRepository.findByEmail(email);
    if (!account) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload = {
      user: {
        id: account.id,
      },
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }

  async register(account) {
    const existingAccount = await accountRepository.findByEmail(account.email);
    if (existingAccount) {
      throw new Error('Account already exists');
    }
    const newAccount = await accountRepository.create(account);

    const payload = {
      user: {
        id: newAccount.id,
      },
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }
}

module.exports = new AuthService();
