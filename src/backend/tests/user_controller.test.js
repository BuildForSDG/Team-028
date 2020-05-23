require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const userControllers = require("../controller/user.controller");

let apiServer;

describe("create()", () => {
  beforeEach(async () => {
    if(!(apiServer && apiServer.listen)){
      apiServer = supertest(app);
    } 
  });
  afterEach(async () => {
    if (apiServer.close){
      await apiServer.close();
    } 
  });
  it("should be a function", () => {
    const res = typeof userControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create a user when no data is sent", async () => {
    const res = await apiServer.post("/user");
    expect(res.statusCode).toEqual(500);
  });
  it("should create a user with valid data", async () => {
    const res = await apiServer.post("/user").send({
      userId: 6,
      firstName: "Ade",
      lastName: "philip",
      email: "e@philip.com",
      phoneNumber: 3904894
    });
    expect(res.statusCode).toEqual(200);
  });
});
