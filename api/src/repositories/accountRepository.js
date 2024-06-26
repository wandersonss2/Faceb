// src/repositories/accountRepository.js
const Account = require('../models/accountModel');

class AccountRepository {
  async create(account) {
    const newAccount = new Account(account);
    return await newAccount.save();
  }

  async findByEmail(email) {
    return await Account.findOne({ email });
  }

  async findById(id) {
    return await Account.findById(id);
  }

  async update(id, account) {
    return await Account.findByIdAndUpdate(id, account, { new: true });
  }

  async delete(id) {
    return await Account.findByIdAndDelete(id);
  }

  async findAll() {
    return await Account.find();
  }
}

module.exports = new AccountRepository();
