// src/controllers/accountController.js
const accountService = require('../services/accountService');

class AccountController {
  async createAccount(req, res) {
    try {
      const account = await accountService.createAccount(req.body);
      res.status(201).json(account);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAccountById(req, res) {
    try {
      const account = await accountService.getAccountById(req.params.id);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      res.json(account);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllAccounts(req, res) {
    try {
      const accounts = await accountService.getAllAccounts();
      res.json(accounts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateAccount(req, res) {
    try {
      const account = await accountService.updateAccount(req.params.id, req.body);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      res.json(account);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteAccount(req, res) {
    try {
      const account = await accountService.deleteAccount(req.params.id);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      res.json({ message: 'Account deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AccountController();
