const express = require('express'),
      app     = express(),
      model   = require('../controller/controller')

app.route('/api/data/user')
   .get(model.getUserData)
   .post(model.addUserData)

module.exports = app