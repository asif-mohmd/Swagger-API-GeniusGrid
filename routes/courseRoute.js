/**
 * @swagger
 * /api/course:
 *   post:
 *     summary: Add a Course
 *     description: add a new course.
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
 *                 description: The name of the course.
 *               courseData:
 *                 type: object
 *                 description: The data of the course.
 *               demoUrl:
 *                 type: string
 *                 description: The course's url.
 *               thumbnail:
 *                 type: string
 *                 description: The thumbnail of the course.
 *     responses:
 *       201:
 *         description: course added successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.post('/api/course', (req, res) => { });

  /**
 * @swagger
 * /api/course:
 *   get:
 *     summary: get all courses
 *     description: Retrieve details of all courses.
 *     tags:
 *       - Course
 *     responses:
 *       200:
 *         description: courses are retrieved successfully.
 *       500:
 *         description: server error.
 */
  app.get('/api/course', (req, res) => { });

    /**
 * @swagger
 * /api/course/{id}:
 *   get:
 *     summary: get a course
 *     description: Retrieve details of the course.
 *     tags:
 *       - Course
 *     responses:
 *       200:
 *         description: course retrieved successfully.
 *       500:
 *         description: server error.
 */
    app.get('/api/course/:id', (req, res) => { });

/**
 * @swagger
 * /api/course/{id}:
 *   put:
 *     summary: Update Course
 *     description: update a course.
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
 *                 description: The name of the course.
 *               demoUrl:
 *                 type: string
 *                 description: The url of the course.
 *               courseData:
 *                 type: string
 *                 description: The data of the course.
 *               thumbnail:
 *                 type: string
 *                 description: The course's thumbnail.
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
 *     summary: delete course
 *     description: delete a course.
 *     tags:
 *       - Course
 *     responses:
 *       200:
 *         description: course deleted successfully.
 *       500:
 *         description: server error.
 */
  app.delete('/api/course/:id', (req, res) => { });