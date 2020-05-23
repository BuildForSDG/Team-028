require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const projectCatControllers = require("../controller/projectCategory.controller");

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
    const res = typeof projectCatControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create project category  when no data is sent", async () => {
    const res = await apiServer.post("/projects/category");
    expect(res.statusCode).toEqual(500);
  });
  it("should create project category with valid data", async () => {
    const res = await apiServer.post("/projects/category").send({
      projectCatId: 1,
      categoryName: "Agriculture",
      categoryDescription: "Fish Farming, Plantain Plantation",
      createdBy: "1"
    });
    expect(res.statusCode).toEqual(200);
  });
});
