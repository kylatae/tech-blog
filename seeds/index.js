const sequelize = require('../config/connection');
const usersData = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await usersData();

  process.exit(0);
};

seedAll();
