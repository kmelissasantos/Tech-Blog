const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'nellie1',
    email: 'nellie@test.com',
    password: 'abc123'
  },
  {
    username: 'melsan31',
    email: 'melissa@test.com',
    password: 'abc123'
  },
  {
    username: 'migdm27',
    email: 'miguel@test.com',
    password: 'abc123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;