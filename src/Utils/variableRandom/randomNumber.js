const randomCode = require('random-number')

const getCode = () => {
  const options = {
    min: 10000,
    max: 99999,
    integer: true
  }

  return randomCode(options)
}

exports.getCode = getCode
