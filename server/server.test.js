const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server Tests', () => {

    describe('Get test', () => {
        it("should return hello world response", (done) => {
            request(app)
                .get("/")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "page not found",
                        name: "Test application",
                    });
                })
                .end(done);
        });
    });

    describe('/user', () => {
        it("should return users json response", (done) => {
            request(app)
                .get("/user")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Nosa",
                        age: 29,
                    });
                })
                .end(done);
        });
    });
});