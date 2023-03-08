const assert = require('assert');
const app = require('../../src/app');

describe('\'specification\' service', () => {
  it('registered the service', () => {
    const service = app.service('specification');

    assert.ok(service, 'Registered the service (specification)');
  });
});
