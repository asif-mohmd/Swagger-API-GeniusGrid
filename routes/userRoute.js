/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: User Signup
 *     description: Sign up a new user.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Id:
 *                 type: string
 *                 description: The ID of the user.
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               avatar:
 *                 type: string
 *                 description: The avatar of the user.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *     responses:
 *       201:
 *         description: User signed up successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
  app.post('/api/users', (req, res) => { });

  /**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get all users
 *     description: Retrieve details of all users.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Users are retrieved successfully.
 *       500:
 *         description: server error.
 */
  app.get('/api/users', (req, res) => { });

/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Update User
 *     description: update a  user.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Id:
 *                 type: string
 *                 description: The ID of the user.
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               avatar:
 *                 type: string
 *                 description: The avatar of the user.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *     responses:
 *       201:
 *         description: User updated successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.put('/api/users/:id', (req, res) => { });

  /**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: delete user
 *     description: delete a user.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Users are retrieved successfully.
 *       500:
 *         description: server error.
 */
  app.delete('/api/users/:id', (req, res) => { });


  /**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User Signin
 *     description: Sign in as a registered user.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *     responses:
 *       200:
 *         description: User signed in successfully.
 *       401:
 *         description: Unauthorized - Invalid email or password.
 */
app.post('/api/users/login', (req, res) => { });

  /**
 * @swagger
 * /api/users/logout:
 *   get:
 *     summary: logout user
 *     description: logout user.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: logout successful.
 *       500:
 *         description: server error.
 */
  app.get('/api/users/logout', (req, res) => { });








