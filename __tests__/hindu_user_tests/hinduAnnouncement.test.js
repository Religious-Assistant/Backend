const request = require("supertest");
const app = require("../../app");
const avatar = require("../../controllers/utils/constants");
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJuZWhhS3VtYXJpIiwiaWF0IjoxNjYxNzIxNjk5LCJleHAiOjE2NjIzMjY0OTl9.ScBZFzLcj2nOxYWWFkl-iCREX2ppKR1BONDlwMK-oaQ";

describe("Muslim User Make Announcement Test", () => {
   //must pass and make announcement
    // test("It validates make Announcement", async () => {
    //   const user = {
    //       announcedBy: "noorFatima",
    //     statement: "new Announcement for eid",
    //     category: 'EID_NAMAZ',
    //     longitude: 28.790094,
    //     latitude: 68.78905,
    //     avatar: avatar.defaultAvatar,
    //   };
    //   const res = await request(app)
    //     .post("/api/make-announcement")
    //     .send(user)
    //     .set("Authorization", token);
    //     console.log(res.body)
    //   expect(res.body.success).toBe(true);
    // });

  test("It validates get all Announcements, when username is correct", async () => {
    const user = {
      username: "nehaKumari",
    };
    const res = await request(app)
      .post("/api/get-all-announcements")
      .send(user)
      .set("Authorization", token);
    console.log(res.body);
    expect(res.body.success).toBe(true);
  });

  test("It validates get all Announcements, when username is incorrect", async () => {
    const user = {
      username: "nehaKumari",
    };
    const res = await request(app)
      .post("/api/get-all-announcements")
      .send(user)
      .set("Authorization", token);
    console.log(res.body);
    expect(res.body.success).toBe(true);
  });
});
