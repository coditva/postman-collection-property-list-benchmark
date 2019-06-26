const _ = require('lodash');

const tests = ['test_insert', 'test_access'];
const options = {
    async: false
};

_.forEach(tests, function (test) {
    var suite = require('./' + test);

    suite.on('cycle', function (event) {
        console.log(String(event.target));
    });

    suite.on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

    suite.run(options);
});

