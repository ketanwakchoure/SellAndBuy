const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
  name: {type: String, required: true, maxLength: [25,"max length of name should be 25 please"]},
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    validate: [validator.isEmail, "should be a valid a mail"]
  },
  password: {
    type:String, 
    required: [true,"password is required"],
    minLength:[8,"password should be alteast 8 characters"],
    maxLength: [16, "password should be atmost 16 characters"]
  },
  confirmPassword: {
    type:String, 
    required: [true,"password is required"],
    minLength:[8,"password should be alteast 8 characters"],
    maxLength: [16, "password should be atmost 16 characters"],
    validate: {
      validator: function(){
        return this.password === this.confirmPassword
      },
      message: 'password and confirm password should be same'
    }
  },
  admin: { type: Boolean, default: false}
})

userSchema.pre('save', async function (next) {
  // Only run this function if password was moddified (not on other update functions)
  if (!this.isModified('password')) return next();
  // Hash password with strength of 12
  this.password = await bcrypt.hash(this.password, 12);
  //remove the confirm field 
  this.confirmPassword = undefined;

  next()
})


module.exports = mongoose.model('User',userSchema)
