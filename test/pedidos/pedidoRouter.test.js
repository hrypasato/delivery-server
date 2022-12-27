const request = require('supertest');
const app = require('../../src/app');


describe("Test pedidos", () => {
  test("GET todos los pedidos", done => {
    request(app)
      .get("/api/v1/pedidos")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});