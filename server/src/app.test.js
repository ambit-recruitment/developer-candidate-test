const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the everyone path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/everyone");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the male path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/male");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the female path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/female");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the under30 path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/under30");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the over30 path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/over30");
    expect(response.statusCode).toBe(200);
  });
});
