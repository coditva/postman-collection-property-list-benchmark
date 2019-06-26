const _ = require('lodash');
const Benchmark = require('benchmark');

const config = require('./config');
const util = require('./util');
const members = require('./data_store').members;
const helpers = require('./helpers');

const reference_single = {};
const reference_multi = {};

_.forEach(members, function (member) {
    helpers.push_val_multi(reference_multi, member);
    helpers.push_val_single(reference_single, member);
});


const suite = new Benchmark.Suite;

suite.add('[OLD] Get one from single valued list', function () {
    var key = util.random(config.num_obj_keys);
    var val = reference_single.key;
});

suite.add('[NEW] Get one from single valued list', function () {
    var key = util.random(config.num_obj_keys);
    var val;
    if (Array.isArray(reference_multi[key])) {
        var refs = reference_multi[key];
        val = refs[refs.length - 1];
    } else {
        val = reference_multi[key];
    }
});

suite.add('[OLD] Get one from multi valued list', function () {
    var key = util.random(config.num_obj_keys);
    var val;
    if (Array.isArray(reference_multi[key])) {
        var vals = reference_multi[key];
        val = vals[vals.length - 1];
    } else {
        val = reference_multi[key];
    }
});

suite.add('[NEW] Get one from multi valued list', function () {
    var key = util.random(config.num_obj_keys);
    var val;
    if (Array.isArray(reference_multi[key])) {
        var refs = reference_multi[key];
        val = refs[refs.length - 1];
    } else {
        val = reference_multi[key];
    }
});

suite.add('[OLD] Get all from single valued list', function () {
    var key = util.random(config.num_obj_keys);
    var vals = _.filter(members, { key: key });
});

suite.add('[NEW] Get all from single valued list', function () {
    var key = util.random(config.num_obj_keys);
    var refs = reference_multi[key];
    var vals = [];
    _.forEach(refs, function (ref) {
        vals.push(ref.value);
    });
});

suite.add('[OLD] Get all from multi valued list', function () {
    var key = util.random(config.num_obj_keys);
    var refs = reference_multi[key];
    var vals = [];
    _.forEach(refs, function (ref) {
        vals.push(ref.value);
    });
});

suite.add('[NEW] Get all from multi valued list', function () {
    var key = util.random(config.num_obj_keys);
    var refs = reference_multi[key];
    var vals = [];
    _.forEach(refs, function (ref) {
        vals.push(ref.value);
    });
});

module.exports = suite;
