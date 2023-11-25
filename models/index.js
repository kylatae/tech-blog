const User = require('./User');
const Message = require('./Message')

Message.belongsTo(User,{
  through:{
    model: Message,
    unique: false
  },
  as: 'messageuser',
  foreignKey:{
    name: 'user_id',
    allowNull: false
  }
})

module.exports = { User, Message };