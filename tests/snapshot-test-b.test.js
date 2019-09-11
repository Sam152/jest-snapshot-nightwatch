const expect = require('expect');
const toMatchSnapshot = require('../index');

expect.extend({toMatchSnapshot: toMatchSnapshot(module)});
module.exports = {
  '@unitTest': true,
  'Second test using snapshots': function () {
    expect('foo').toMatchSnapshot();
    expect('bar').toMatchSnapshot();
  },
};
