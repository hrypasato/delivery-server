const request = require('supertest');
const app = require('../../src/app');


describe("Test productos", () => {
  test("GET todos los productos", done => {
    request(app)
      .get("/api/v1/tiendas")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

});