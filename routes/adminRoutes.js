/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Admin Dashboard
 *     description: Retrieve a summary of users, orders for the admin dashboard.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved summary.
 *         content:
 *           application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Order'
 */
app.get('/admin/dashboard', (req, res) => { });

/**
 * @swagger
 *  /api/admin/instructor-list:
 *   get:
 *     summary: Get Instructors List
 *     description: Retrieve a list of Instructors.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved the list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Instructor'
 *       404:
 *         description: No Instructors found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/instructor-list', (req, res) => {});

/**
 * @swagger
 *  /api/admin/users-list:
 *   get:
 *     summary: Get users List
 *     description: Retrieve a list of Users.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved the list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/users-list', (req, res) => {});

/**
 * @swagger
 *  /api/admin/course-list:
 *   get:
 *     summary: Get course List
 *     description: Retrieve a list of Courses.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved the list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       404:
 *         description: No course found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/course-list', (req, res) => {});

/**
 * @swagger
 * /api/admin/user/{id}:
 *   get:
 *     summary: Get User Details
 *     description: Retrieve details of a specific User.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the user details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: No user found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/user/{id}', (req, res) => {});

/**
 * @swagger
 * /api/admin/instructor/{id}:
 *   get:
 *     summary: Get Instructor Details
 *     description: Retrieve details of a specific Instructor.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Instructor ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the instructor details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Instructor'
 *       404:
 *         description: No instructor found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/instructor/{id}', (req, res) => {});

/**
 * @swagger
 * /api/admin/course/{id}:
 *   get:
 *     summary: Get Course Details
 *     description: Retrieve details of a specific Course.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Course ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the course details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: No course found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/course/{id}', (req, res) => {});

/**
 * @swagger
 * /api/admin/user/{id}:
 *   post:
 *     summary: Block/Unblock User
 *     description: Block or unblock a user by ID.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully blocked/unblocked the user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: No user found.
 *       500:
 *         description: Internal server error.
 */
app.post('/api/admin/user/{id}', (req, res) => {});

/**
 * @swagger
 * /api/admin/instructor/{id}:
 *   post:
 *     summary: Block/Unblock Instructor
 *     description: Block or unblock an instructor by ID.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Instructor ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully blocked/unblocked the instructor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Instructor'
 *       404:
 *         description: No instructor found.
 *       500:
 *         description: Internal server error.
 */
app.post('/api/admin/instructor/{id}', (req, res) => {});

/**
 * @swagger
 * /api/admin/course/{id}:
 *   post:
 *     summary: Block/Unblock Course
 *     description: Block or unblock a course by ID.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Course ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully blocked/unblocked the course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: No course found.
 *       500:
 *         description: Internal server error.
 */
app.post('/api/admin/course/{id}', (req, res) => {});
