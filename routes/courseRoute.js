/**
 * @swagger
 * /api/course:
 *   post:
 *     summary: Add a Course
 *     description: Add a new course.
 *     tags:
 *       - Course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               courseData:
 *                 type: object
 *               demoUrl:
 *                 type: string
 *               thumbnail:
 *                 type: string
 *     responses:
 *       201:
 *         description: Course added successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.post('/api/course', (req, res) => { });

/**
 * @swagger
 * /api/course:
 *   get:
 *     summary: Get all courses
 *     description: Retrieve details of all courses.
 *     tags:
 *       - Course
 *     responses:
 *       200:
 *         description: Courses retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       500:
 *         description: Server error.
 */
app.get('/api/course', (req, res) => { });

/**
 * @swagger
 * /api/course/{id}:
 *   get:
 *     summary: Get a course
 *     description: Retrieve details of a course.
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       500:
 *         description: Server error.
 */
app.get('/api/course/:id', (req, res) => { });

/**
 * @swagger
 * /api/course/{id}:
 *   put:
 *     summary: Update a course
 *     description: Update a course.
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               courseData:
 *                 type: object
 *               demoUrl:
 *                 type: string
 *               thumbnail:
 *                 type: string
 *     responses:
 *       201:
 *         description: Course updated successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.put('/api/course/:id', (req, res) => { });

/**
 * @swagger
 * /api/course/{id}:
 *   delete:
 *     summary: Delete a course
 *     description: Delete a course.
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted successfully.
 *       500:
 *         description: Server error.
 */
app.delete('/api/course/:id', (req, res) => { });
