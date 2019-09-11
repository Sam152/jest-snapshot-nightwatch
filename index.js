const jestSnapshot = require('jest-snapshot');
const path = require('path');

/**
 * A jest snapshot matcher setup with context from a running nightwatch test.
 */
function toMatchSnapshot(testModule) {
  let snapshotPath = [path.dirname(module.parent.id), '__snapshots__', path.basename(module.parent.id) + '.snap'].join('/');
  let testName = module.parent.exports.client.currentTest.name;

  const snapshotState = new jestSnapshot.SnapshotState(snapshotPath, {
    updateSnapshot: process.env.SNAPSHOT_UPDATE ? 'all' : 'new',
  });

  const matcher = jestSnapshot.toMatchSnapshot.bind({
    snapshotState,
    currentTestName: testName,
  });
  const result = matcher(actual);
  snapshotState.save();


  return result;
}

module.exports = toMatchSnapshot;
