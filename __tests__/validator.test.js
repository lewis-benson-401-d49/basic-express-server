'use strict';
const validator = require('../src/middleware/validator');


describe('Validator for name query on "/person" endpoint', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  it('calls the next function as expected', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
  it('throws a 500 error if no name is provided', ()=>{
    
  });

});
