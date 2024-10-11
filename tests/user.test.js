const request = require('supertest')
const {dbDisconnect} = require('../models/index')
const app = require('../app')
const {
  expect,
  describe,
  test,
  afterAll,
} = require('@jest/globals');
const req = request(app);


let authorizationToken;
describe('Authenticate Testing', () => {
	test('should signup the new user', async () =>{
		const res = await req
		.post('/auth/signup')
		.send({lastName: "testLastName",
			firstName: "testFirstName",
			username: "testUsername",
			email: "testEmail1",
			password: "testPassword"
		})


		expect(res.statusCode).toEqual(201)
		expect(res.body).toHaveProperty('token')
	}, 10000);

	test('should login a user', async () => {
		const res = await req
		.post('/auth/login')
		.send({username: "testUsername", password: "testPassword"})

		authorizationToken = res.body.data.encryptedToken;

		expect(res.statusCode).toEqual(201)
		expect(res.body).toHaveProperty('token')
	}, 20000);

	test('should get user profile', async () => {
		const res = await req
		.post('/user/account-profile')
		.set("Authorization", authorizationToken)

		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('Id')
	}, 20000);

	afterAll(async () => {
		try {
			await dbDisconnect();
		} catch (error) {
			console.error(error);
			process.exit(1);
		}
	});
})