# Social-Media-Api

## Overview

The **Social Media Backend Operation** project provides a robust backend solution for social media applications. It allows users to authenticate, create posts, follow other users, and receive real-time notifications. Built with Node.js and Express.js, this backend leverages PostgreSQL as the database, ensuring efficient data handling and scalability.

## Features

- User authentication and authorization
- Post creation, editing, and deletion
- Follow and unfollow functionality
- Real-time notifications
- Like
- Comment
- Repost
- RESTful API for seamless integration with frontend applications

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for Node.js
- **PostgreSQL**: Relational database for data storage
- **Sequelize**: Promise-based Node.js ORM for relational databases
- **JWT**: For secure user authentication

## Getting Started

### Prerequisites

- Node.js
- npm (Node package manager)
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Solexgreat/Social-Media-API.git
   cd Social-Media-API
2. Install dependencies:
```bash
  npm install
```

3. Set up your database:
- Create a PostgreSQL database and update your environment variables accordingly.

4. Start the server:

```bash
npm start
```
The server will run on ```http://localhost:3000```.

## API Documentation
API Documentation Link
- [Auth API](https://documenter.getpostman.com/view/35184158/2sAXxTbqYX)

- [Post](https://documenter.getpostman.com/view/35184158/2sAXxTbqd1)

- [Comment](https://documenter.getpostman.com/view/35184158/2sAXxTbqhR)

- [Like](https://documenter.getpostman.com/view/35184158/2sAXxTbqmq)

### Testing
To run tests, use the following command:

```bash
  npm test
```

## Deployment
This project is deployed on [Render](https://render.com) and is accessible for testing.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvement.

### License
This project is licensed under the MIT License.

### Acknowledgements
- PostgreSQL
- Sequelize
- Express.js
- Node.js
