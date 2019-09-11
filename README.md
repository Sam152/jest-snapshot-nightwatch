jest-snapshot-nightwatch
---

Use the package to integrate the `jest-snapshot` package into your Nightwatch.js tests:

```
const expect = require('expect');
const toMatchSnapshot = require('jest-snapshot-nightwatch');
expect.extend({toMatchSnapshot});

module.exports = {
  '@unitTest': true,
  'Sample snapshot test': function () {
    expect('foo').toMatchSnapshot();
  },
};

```  
