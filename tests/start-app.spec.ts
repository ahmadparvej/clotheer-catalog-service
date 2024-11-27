import request from "supertest";
import app from "../src/app";

describe("GET Start App", () => {
  it("should start the app", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
