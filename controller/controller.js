const mongoose = require('mongoose'),
      model    = require('../model/model'),
      user     = mongoose.model('user')

exports.addUserData = (req,res) => {
    var newUser = new user(req.body)
    newUser.save((err, user) => {
        if(err) {
            res.status(400).send(err.errors)
            return
        }
        res.send("User data has been added")
    })
}

exports.getUserData = (req,res) => {
    user.find({}, (err,user) => {
        if(err) {
            res.send(err)
            return
        }
        res.json(user)
    })
}