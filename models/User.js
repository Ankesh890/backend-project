const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {type: String,unique: true},
    password: String,
    role:{ type: String,enum:['admin','member','guest'],default: 'member'},
    profilepicture: String,
    verified: {type: Boolean,default: false}
},{ timestamps: true });

  Module.exports = mongoose.model('user', UserSchema);