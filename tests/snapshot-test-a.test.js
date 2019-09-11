const expect = require('expect');
const toMatchSnapshot = require('../index');

expect.extend({toMatchSnapshot});

module.exports = {
  '@unitTest': true,
  'Test using snapshots': function () {
    expect('passing snapshot').toMatchSnapshot();
    expect('second passing snapshot').toMatchSnapshot();
  },
};
