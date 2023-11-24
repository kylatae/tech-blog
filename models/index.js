const User = require('./User');
const Message = require('./Message')

// Message.belongsToOne(User,{
//   through:{
//     model: Message,
//     unique: false
//   },
//   as: 'messageuser',
//   foreignKey:{
//     name: 'user_id',
//     allowNull: false
//   }
// })

// User.hasMany(Message,{
//   through:{
//     model: Message,
//     unique: false,
//   },
//   as: 'usermessage',
//   foreignKey:{
//     name: 'user_id',
//     allowNull: false,
//   }
// })

module.exports = { User, Message };