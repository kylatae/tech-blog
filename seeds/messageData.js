const { Message } = require('../models');

const messagedata = [
  {
    title: 'Some Useful Info',
    user_body: `Don't forget to seed your projects`,
    user_id: '1',
  },
  {
    title: `Don't Give up`,
    user_body: `1000 Failures and 1 Success is still a Success`,
    user_id: '2',
  },
  {
    title: `Everyone can do it`,
    user_body: `It may take longer for some but everyone can do this!`,
    user_id: '2',
  },
  {
    title: `Just Code`,
    user_body: `Keeping coding, good, bad, or indifferent just keep coding.`,
    user_id: '3',
  },
  
  
];

const seedMessage= () => Message.bulkCreate(messagedata);

module.exports = seedMessage;
