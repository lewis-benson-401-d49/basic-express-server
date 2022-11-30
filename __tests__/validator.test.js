'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Validator for name query on "/person" endpoint', () => {
  it('responds with 200 code with query "/person?name=Lewis"', async () => {
    const response = await request.get('/person?name=Lewis');
    expect(response.status).toBe(200);
  });

  it('responds with 500 code with query "/person?name="', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toBe(500);
  });

  it('given a name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=Lewis');
    expect(response.status).toBe(200);
    expect(typeof (response)).toEqual('object');
  });
});
