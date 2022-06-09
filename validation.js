const validator = require('./validate');

const addNew = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    date: 'required|string',
    time: 'required|string',
    city: 'required|string',
    zip: 'required|string',
    address: 'required|string',
    description: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const updateOne = (req, res, next) => {
  const validationRule = {
    title: 'string',
    date: 'string',
    time: 'string',
    city: 'string',
    zip: 'string',
    address: 'string',
    description: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  addNew,
  updateOne
};
