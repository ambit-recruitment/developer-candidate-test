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

describe("Test the api path", () => {
  test("It should response the GET method with correct data", async () => {
    const response = await request(app).get("/api");
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      people: [
        { name: "Jim", age: 30, gender: "male", _id: "b3Fshn8F976TZCTg" },
        { name: "Jane", age: 55, gender: "female", _id: "k3nEqkqlKmWZNejC" },
        { name: "Bob", age: 20, gender: "male", _id: "oqnu2ZnPTebp04bG" },
        { name: "Sally", age: 24, gender: "female", _id: "tKmv8RC6GlUnYcV3" },
      ],
    });
  });
});
