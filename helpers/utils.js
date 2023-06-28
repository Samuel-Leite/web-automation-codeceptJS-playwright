const randomName = require('node-random-name')
const randomCode = require('random-number')

const getFirstName = () => {
  return randomName({ first: true })
}

const getLastName = () => {
  return randomName({ last: true })
}

const getCode = () => {
  const options = {
    min: 10000,
    max: 99999,
    integer: true
  }

  return randomCode(options)
}

exports.getCode = getCode
exports.getFirstName = getFirstName
exports.getLastName = getLastName
