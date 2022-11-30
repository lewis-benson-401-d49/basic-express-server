'use strict';


module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    res.status(500);
    next('Name is required.');
  }
};

