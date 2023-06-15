const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./cap-server");

// Configure chai
chai.use(chaiHttp);
chai.should();

let app = null;

before((done) => {
	server.then((result) => {
		app = result;
		done();
	});
});

describe("Testing OrgMan CAPM application", () => {
    // Test suite 1 - Employees
	describe("Testing employee functionality", () => {
        // Test 1 - Get employees
		it("should return a list of employees", (done) => {
			chai.request(app)
				.get("/service/org/Employees")
				.end((error, response) => {
					try {
						response.should.have.status(200);
						response.body.value.should.be.an("array").to.have.lengthOf(4);
						done();
					} catch (error) {
						done(error);
					}
				});
		});

        // Test 2 - Get 1 employee
        it("should return an employee", (done) => {
			chai.request(app)
				.get("/service/org/Employees?$top=1")
				.end((error, response) => {
					try {
						response.should.have.status(200);
						response.body.value.should.be.an("array").to.have.lengthOf(1);
						done();
					} catch (error) {
						done(error);
					}
				});
		});

        // Test 3 - Create employee
        it("should create an employee", (done) => {
            chai.request(app)
                .post("/service/org/Employees")
                .send({
                    name: "Test James Bond",
                    email: "test_james@abcdzxy.com",
                    level: 6,
                    skills: "BTP Architecture"
                })
                .end((error, response) => {
                    try {
                        response.should.have.status(201);
                        response.body.should.be.an("object");
                        response.body.ID.should.be.a("string");
                        response.body.level_name.should.equal("Director");
                        done();
                    } catch (error) {
                        done(error);
                    }
                });
        });
	});

    // Test suite 2 - Managers
	describe("Testing managers functionality", () => {
		it("should return a list of managers", (done) => {
			chai.request(app)
				.get("/service/org/Managers")
				.end((error, response) => {
					try {
						response.should.have.status(200);
						response.body.value.should.be.an("array").to.have.lengthOf(2);
						done();
					} catch (error) {
						done(error);
					}
				});
		});
	});
});