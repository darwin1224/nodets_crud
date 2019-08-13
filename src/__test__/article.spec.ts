import * as request from 'supertest'
import app from "../app";

describe("Hello World", () => {
  it("Should return hello world", () => {
    const expectation = "Hello World";
    expect(expectation.toLowerCase()).toEqual("hello world");
  });
  it("Should return Darwin as my name", () => {
    const name = "Darwin";
    expect(name).toEqual("Darwin");
  });
});

// describe("Article Service", () => {
//   it("when dispatch getAllArticle(), it should be defined", () => {
//     request(app).get('/article').then((res: any) => {
//       expect(res.statusCode).toBe(200)
//     })
//   });
// });
