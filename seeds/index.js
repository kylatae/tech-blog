const sequelize = require('../config/connection');
const usersData = require('./usersData');
const messageData = require('./messageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await usersData();
  await messageData();

  process.exit(0);
};

seedAll();
