var random_name = require('node-random-name');

const getFirstName = () => {
    return random_name({ first: true});
}

const getLastName = () => {
    return random_name({ last: true });
}

exports.getFirstName = getFirstName
exports.getLastName = getLastName