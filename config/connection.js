const { mongoose, connect, connection } = require('mongoose');
// require("dotenv").config(); // To use environment variables.

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
mongoose.connect(process.env.DB_NAME, { // Connection string to local instance of MongoDB including database name
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection;
