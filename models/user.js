const mongoose  =   require('mongoose')

var userSchema  =  new mongoose.Schema({
    name: String,
    email: String,
    issue: String
})

var User = mongoose.model('User', userSchema)

module.exports = User