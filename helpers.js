const _ = require('lodash');

function push_val_multi(reference, member) {
    if (_.has(reference, member.key)) {
        if (Array.isArray(reference[member.key])) {
            reference[member.key].push(member);
        } else {
            var val = new Array;
            val.push(reference[member.key]);
            val.push(member);
            reference[member.key] = val;
        };
    } else {
        reference[member.key] = member;
    }
}

module.exports = {
    push_val_multi: push_val_multi,
    push_val_single: push_val_single,
};
