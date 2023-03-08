const assert = require('assert');
const app = require('../../src/app');

describe('\'laptop\' service', () => {
  it('registered the service', () => {
    const service = app.service('laptop');

    assert.ok(service, 'Registered the service (laptop)');
  });
});
