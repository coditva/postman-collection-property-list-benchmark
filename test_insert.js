const _ = require('lodash');
const Benchmark = require('benchmark');

const members = require('./data_store').members;
const helpers = require('./helpers');

const suite = new Benchmark.Suite;

suite.add('Add elements to single-valued list', function () {
    var reference = {};
    _.forEach(members, function (member) {
        helpers.push_val_single(reference, member);
    });
});

suite.add('Add elements to multi-valued list', function () {
    var reference = {};
    _.forEach(members, function (member) {
        helpers.push_val_multi(reference, member);
    });
});

module.exports = suite;
