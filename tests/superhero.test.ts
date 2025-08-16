import request from "supertest";
import app from "../src/app";

describe("Superhero API", () => {
  it("should list superheroes (empty)", async () => {
    const res = await request(app).get("/api/superheroes");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a superhero", async () => {
    const res = await request(app)
      .post("/api/superheroes")
      .field("nickname", "Batman")
      .field("real_name", "Bruce Wayne");

    expect(res.status).toBe(201);
    expect(res.body.nickname).toBe("Batman");
  });
});
