const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        max:32,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true});

// Hash the password before saving the user
userSchema.pre('save',async function(){
    const user = this;
    if(!user.isModified('password'))
    {
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password,salt);
        user.password = hashPassword;
        next();
    }
    catch(err){
        console.error(err);
        next(err);
    }
})

// Compare the password
userSchema.methods.compressPassword = async function(password){
    try{
        return await bcrypt.compare(password,this.password);
    }
    catch(err){
        console.error(err);
    }
}

// Generate token for the user

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
             id: this._id.toString(),
             email:this.email,
             isAdmin:this.isAdmin
            }, 
            process.env.JWT_SECRET_KEY, 
            { 
                expiresIn: process.env.JWT_TOKEN_EXPIRE 
            });
    } catch (error) {
        console.error(error);
    }
}

module.exports = mongoose.model('User',userSchema);