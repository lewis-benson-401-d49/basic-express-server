'use strict';


module.exports = (req, res, next) => {
  if(req.query.name) next();
  res.status(500);
  next('Name is required.');
};

