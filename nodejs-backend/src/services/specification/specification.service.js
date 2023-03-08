const { Specification } = require('./specification.class');
const createModel = require('../../models/specification.model');
const hooks = require('./specification.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/specification', new Specification(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('specification');

  service.hooks(hooks);
};