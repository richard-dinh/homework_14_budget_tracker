const {connect} = require('mongoose')

module.exports = connect('mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})