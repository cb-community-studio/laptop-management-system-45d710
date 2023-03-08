const users = require("./users/users.service.js");
const laptop = require("./laptop/laptop.service.js");
const specification = require("./specification/specification.service.js");
const employee = require("./employee/employee.service.js");
const report = require("./report/report.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(laptop);
  app.configure(specification);
  app.configure(employee);
  app.configure(report);
  // ~cb-add-configure-service-name~
};
