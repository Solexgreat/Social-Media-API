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
			email: "testEmail2",
			password: "testPassword"
		})


		expect(res.statusCode).toEqual(201)
		expect(res.body).toHaveProperty('token')
	}, 10000);

	test('should login a user', async () => {
		const res = await req
		.post('/auth/login')
		.send({username: "testUsername", password: "testPassword"})

		authorizationToken = res.body.token;

		expect(res.statusCode).toEqual(201)
		expect(res.body).toHaveProperty('token')
	}, 20000);

	test('should get user profile', async () => {
		const res = await req
		.post('/user/account-profile')
		.set("Authorization", `Bearer ${authorizationToken}`)

		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('Id')
	},);

	test('should update user profile', async () => {
		const res = await req
		.patch('/user/update-user')
		.set("Authorization", `Bearer ${authorizationToken}`)
		.send({"email": "updatedEmail@gmail.com"})

		expect(res.statusCode).toEqual(200)
		expect(res.body.email).toEqual("updatedEmail@gmail.com")
	},);

	test('should get user', async () => {
		const res = await req
		.get('/user/1')
		.set("Authorization", `Bearer ${authorizationToken}`)

		expect(res.statusCode).toEqual(200)
		expect(res.body.id).toEqual(1)
	},);

	// afterAll(async () => {
	// 	try {
	// 		await dbDisconnect();
	// 	} catch (error) {
	// 		console.error(error);
	// 		process.exit(1);
	// 	}
	// });
})