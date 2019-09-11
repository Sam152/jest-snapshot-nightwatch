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

Run your tests like normal to create new snapshots or assert existing ones:

```
npm run test
```

Run with the `SNAPSHOT_UPDATE` environment variable set to update snapshots to the latest version:

```
SNAPSHOT_UPDATE=1 npm run test
```

More information on snapshot testing from the [jest documentation](https://jestjs.io/docs/en/snapshot-testing).
