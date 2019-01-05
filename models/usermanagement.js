const mongoose=require('mongoose');

var User=mongoose.model('User',{
    fullname:{type:String},
    phone: { type: number },
    email: { type: String },
    username:{type:String},
    password:{type:String}
},'users');

module.exports={
    User:User
};