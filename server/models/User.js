const mongoose = require('mongoose');
const { Schema } = mongoose;
//same as 
//const Schema = mongoose.Schema;

const userSchema = new Schema ({
    googleId: String
});

//create new collections 'users'
mongoose.model('users', userSchema);