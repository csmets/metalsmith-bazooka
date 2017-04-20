const test = require('ava');
const Metalsmith = require('metalsmith');
const bazooka = require('../');

/*
test('Testing if metalsmith-bazooka loads', (t) => {
    const testPath = 'text/fixtures/';

    new Metalsmith(testPath)
        .clean(true)
        .use(bazooka())
        .build(() => {
            t.pass();
        });
});
*/
test('Compiling of bazooka data', (t) => {
    const testPath = 'test/fixtures';
    new Metalsmith(testPath)
        .source('src')
        .destination('build')
        .use(bazooka())
        .build((err) => {
            if (err) {
                t.fail();
                throw err;
            } else {
                t.pass();
            }
        });
});
