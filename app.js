const express = require ('express');
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv')
const userRoutes = require('./routes/user')
const commentRoutes = require('./routes/comment')
const followerRoutes = require('./routes/follower')
const likeRoutes = require('./routes/like')
const notificationRoutes = require('./routes/notification')
const postRoutes = require('./routes/post')
const repostRoutes = require('./routes/repost')
const authRoutes = require('./routes/auth');
const { generalLimiter, authLimiter } = require('./limiter');


const app = express();

dotenv.config() //load evn variable


//Middleware to parse incoming Json request
app.use(bodyParser.json())


//serve the routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/repost', repostRoutes);
app.use('/post', postRoutes);
app.use('/notification', notificationRoutes);
app.use('/comment', commentRoutes);
app.use('/like', likeRoutes);
app.use('/follow', followerRoutes);


// Limiter
app.use('/', generalLimiter),
app.use('/auth', authLimiter)

app.use((err, req, res, next) =>{
	return res.status(500).json({error: err.message})
})

//Start the server
const PORT = process.env.PORT;
app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`)
})

module.exports = app;