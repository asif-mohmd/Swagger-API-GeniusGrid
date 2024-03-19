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
app.post('/api/users', (req, res) => { 
  // Handle user signup logic here
  // Respond with appropriate status codes and messages
});

/**
* @swagger
* /api/users:
*   get:
*     summary: Get all users
*     description: Retrieve details of all users.
*     tags:
*       - User
*     responses:
*       200:
*         description: Users are retrieved successfully.
*       500:
*         description: Server error.
*/
app.get('/api/users', (req, res) => { 
  // Handle retrieving all users logic here
  // Respond with appropriate status codes and messages
});

/**
* @swagger
* /api/users/{id}:
*   put:
*     summary: Update User
*     description: Update a user.
*     tags:
*       - User
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID of the user to update.
*         schema:
*           type: string
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
app.put('/api/users/:id', (req, res) => { 
  // Handle updating user logic here
  // Respond with appropriate status codes and messages
});

/**
* @swagger
* /api/users/{id}:
*   delete:
*     summary: Delete User
*     description: Delete a user.
*     tags:
*       - User
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID of the user to delete.
*         schema:
*           type: string
*     responses:
*       200:
*         description: User deleted successfully.
*       500:
*         description: Server error.
*/
app.delete('/api/users/:id', (req, res) => { 
  // Handle deleting user logic here
  // Respond with appropriate status codes and messages
});

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
app.post('/api/users/login', (req, res) => { 
  // Handle user login logic here
  // Respond with appropriate status codes and messages
});

/**
* @swagger
* /api/users/logout:
*   get:
*     summary: Logout User
*     description: Logout user.
*     tags:
*       - User
*     responses:
*       200:
*         description: Logout successful.
*       500:
*         description: Server error.
*/
app.get('/api/users/logout', (req, res) => { 
  // Handle user logout logic here
  // Respond with appropriate status codes and messages
});
