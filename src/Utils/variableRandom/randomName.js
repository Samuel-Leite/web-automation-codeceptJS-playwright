const randomName = require('node-random-name')

const getFirstName = () => {
  return randomName({ first: true })
}

const getLastName = () => {
  return randomName({ last: true })
}

exports.getFirstName = getFirstName
exports.getLastName = getLastName
