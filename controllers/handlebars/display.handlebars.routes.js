const router = require('express').Router();
const { User, Message } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const dbMessages = await Message.findAll({
      include:[
        {
          model: User,
          as: 'messageuser',
          attributes: ['user', 'id']
        }
      ]
    })
    const messages = dbMessages.map((message) =>
    message.get({plain: true})
    )
    res.render('homepage', {messages,
      loggedIn: req.session.loggedIn, 
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});


router.get('/post', async (req, res) => {
  try{
    const dbMessages = await Message.findAll({
      where:[
        {
          user_id: req.session.userID
        }
      ],
      include:[
        {
          model: User,
          as: 'messageuser',
          attributes: ['user', 'id']
        }
      ]
    })
    const messages = dbMessages.map((message) =>
    message.get({plain: true})
    )
    res.render('post', {messages,
      loggedIn: req.session.loggedIn, 
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.get('/post/:id', async (req, res) => {
  try{
    const dbMessages = await Message.findAll({
      where:[
        {
          id: req.params.id
        }
      ],
      include:[
        {
          model: User,
          as: 'messageuser',
          attributes: ['user', 'id']
        }
      ]
    })
    const messages = dbMessages.map((message) =>
    message.get({plain: true})
    )
    console.log(messages)
    res.render('edit', {messages,
      loggedIn: req.session.loggedIn, 
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});


router.get('/login', async (req, res) => {
  try{
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }    
    res.render('login', {loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.get('/signup', async (req, res) => {
  try{
    res.render('signup', {loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

module.exports = router;