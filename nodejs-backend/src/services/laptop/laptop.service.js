const { Laptop } = require('./laptop.class');
const createModel = require('../../models/laptop.model');
const hooks = require('./laptop.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/laptop', new Laptop(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('laptop');

  service.hooks(hooks);
};