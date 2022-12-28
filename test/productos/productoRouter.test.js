const request = require('supertest');
const app = require('../../src/app');


describe("Test productos", () => {
  test("GET todos los productos", done => {
    request(app)
      .get("/api/v1/productos")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("GET producto por id", done => {
    request(app)
      .get("/api/v1/productos/byid/c1eabb77-6f64-4afa-8c1a-409300640867")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("GET producto por id", done => {
    request(app)
      .get("/api/v1/productos/bytienda/b46f0121-086c-48c9-bacd-65c82c06f73d")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});