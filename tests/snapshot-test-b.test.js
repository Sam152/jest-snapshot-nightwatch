const expect = require('expect');
const toMatchSnapshot = require('../index');

expect.extend({toMatchSnapshot});

module.exports = {
  '@unitTest': true,
  'Second test using snapshots': function () {
    expect('foo').toMatchSnapshot();
    expect('bar').toMatchSnapshot();
  },
};
