// import chai from 'chai';
// import db from '../models/index.js';
// import User from '../models/user.js';
// import Post from '../models/post.js';
// import Comment from '../models/comment.js';
const sequelize = require('../models')
const Comment = require('../models');
const Post = require('../models');
const User = require('../models');
// const app =  import ('../app');
// const chai =  require ('chai')

// (async () => {
//   const chaiAsPromised = await import('chai-as-promised');
//   chai.use(chaiAsPromised.defauimport { Sequelize } from 'sequelize';
//lt);
// })();

// const { expect } = chai;

describe('Authentication test', () => {
	beforeAll(async () =>{
		await User.sync({ force: true, schema: 'test_schema' });
		await Post.sync({ force: true, schema: 'test_schema' });
		await Comment.sync({ force: true, schema: 'test_schema' });
	});

	it('should be able to create user', async () =>{
		const user = await User.create({
			lastName: "John Deo",
		}, {schema: 'test_schema'})

		expect(user).toHaveProperty('id')
		expect(user.name).to.equal("John Doe")
	});

	it('should be able to create a post with the associated user', async () =>{
		const user = await User.findOne({
			where:
			{lastName: "John Deo"}
		}, {schema: 'test_schema'})

		const post = await Post.create({
			userId: user.id,
			content: "test Post"
		}, {schema: 'test_schema'})

		expect(post).toHaveProperty('id')
		expect(post.content).to.be("test Post")
	});

	it('should be able to create a comment with the associated user', async () =>{

		const post = await Post.findOne({
			where:
			{content: "test Post"}
		}, {schema: 'test_schema'})

		const comment = await Comment.create({

			postId: post.id,
			content: "test comment"
		}, {schema: 'test_schema'})

		expect(comment).totoHavePropert('id')
		expect(comment.content).to.be("test Comment")
	});

	afterAll (async ()=>{
		await sequelize.dropSchema('test_schema')
	})
})