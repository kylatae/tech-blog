//Sets up all required packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require ('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');

//Establishes that all app functions will be used with express and the PORT will be taken from the .env, if no .env is present it will be 3001 by default.
const app = express();
const PORT = process.env.PORT || 3001;
const helpers = require('./utils/helpers')

//Sets up session storage for a 24 hour time period using maxAge's equation
const sess = {
  secret: 'session storage',
  cookie: {
    maxAge: 24*60*60*1000,
  },
  resave: false,
  saveUninitiated: true,
  store: new SequlizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//Setting up handlebars for use
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//allowing items in public folder to be sent to end user
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//refers to routes for what should be sent out on request
app.use(routes);

//opens server on designated PORT
sequelize.sync({ force: false }).then(()=>{
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}.`
    )
  )
})