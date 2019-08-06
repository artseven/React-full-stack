const express        = require('express');
const mongoose       = require('mongoose');
const keys           = require('./config/keys');
require('./services/passport');
//same as 
//const passportConfig = require('./services/passport');



const app            = express();

require('./routes/authRoutes')(app);
//same as 
//const authRoutes     = require('./routes/authRoutes');
//authRoutes(app);


mongoose.connect(keys.mongoURI);



const PORT = process.env.PORT || 5000;
app.listen(PORT);

