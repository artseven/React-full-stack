const express        = require('express');
const mongoose       = require('mongoose');
const cookieSession  = require('cookie-session');
const passport       = require('passport');
const keys           = require('./config/keys');
//model should be required first before used in passport
require('./models/User');
require('./services/passport');
//same as 
//const passportConfig = require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })  
);

require('./routes/authRoutes')(app);
//same as 
//const authRoutes     = require('./routes/authRoutes');
//authRoutes(app);





const PORT = process.env.PORT || 5000;
app.listen(PORT);

