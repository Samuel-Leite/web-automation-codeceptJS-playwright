var randomCode = require('random-number');

const getCode = () => {
    var options = {
        min:  10000, max:  99999, integer: true
      }
    
    return randomCode(options);
}

exports.getCode = getCode