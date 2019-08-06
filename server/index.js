const express        = require('express');
require('./services/passport');
//same as 
//const passportConfig = require('./services/passport');



const app            = express();

require('./routes/authRoutes')(app);
//same as 
//const authRoutes     = require('./routes/authRoutes');
//authRoutes(app);





const PORT = process.env.PORT || 5000;
app.listen(PORT);

