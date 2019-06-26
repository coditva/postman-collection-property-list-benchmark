const util = require('./util');

const config = require('./config');

var members = [];
for (var i = 0, len = config.num_elements; i < len; i++) {
    var member = {
        key: util.random(config.num_obj_keys),
        value: util.random(50000)
    };
    members.push(member);
}

module.exports = {
    members: members
};
