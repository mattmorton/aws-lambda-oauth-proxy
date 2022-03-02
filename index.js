var config = require('./config');
var grant = require('grant').aws({
  config, session: {secret: process.env.SECRET }
})
exports.handler = async (event) => {
  var {redirect, response} = await grant(event)
  return redirect || {
    statusCode: 200,
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(response)
  }
}
