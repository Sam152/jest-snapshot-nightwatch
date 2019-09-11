const jestSnapshot = require('jest-snapshot');
const path = require('path');

let snapshotPath = [path.dirname(module.parent.id), '__snapshots__', path.basename(module.parent.id) + '.snap'].join('/');
const snapshotState = new jestSnapshot.SnapshotState(snapshotPath, {
  updateSnapshot: process.env.SNAPSHOT_UPDATE ? 'all' : 'new',
});

/**
 * A snapshot matcher setup with context from the current nightwatch test.
 */
function toMatchSnapshot(actual) {
  let testName = module.parent.exports.client.currentTest.name;
  const matcher = jestSnapshot.toMatchSnapshot.bind({
    snapshotState,
    currentTestName: testName,
  });
  const result = matcher(actual);
  snapshotState.save();
  return result;
}

module.exports = toMatchSnapshot;

// Remove the module from the module cache, so that each test refreshes the
// "module.parent" variable used above.
delete require.cache[__filename];
