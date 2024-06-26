// src/services/accountService.js
const accountRepository = require('../repositories/accountRepository');

class AccountService {
  async createAccount(account) {
    const existingAccount = await accountRepository.findByEmail(account.email);
    if (existingAccount) {
      throw new Error('Account already exists');
    }
    return await accountRepository.create(account);
  }

  async getAccountById(id) {
    return await accountRepository.findById(id);
  }

  async getAllAccounts() {
    return await accountRepository.findAll();
  }

  async updateAccount(id, account) {
    return await accountRepository.update(id, account);
  }

  async deleteAccount(id) {
    return await accountRepository.delete(id);
  }
}

module.exports = new AccountService();
