const request = require("supertest");
const app = require("../../app");
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJub29yRmF0aW1hIiwiaWF0IjoxNjYxNzAzNDE3LCJleHAiOjE2NjIzMDgyMTd9.vPk1KN8vfaPxQy34LytJfxL8a9Z9uDDOgG1W8TYFVTk";

describe("Muslim Quran Info Test", () => {
  test("It validates get parahs", async () => {
    const res = await request(app).get("/api/get-parahs");
    console.log(res.statusCode);
    expect(res.body.success).toBe(true);
  });
});
