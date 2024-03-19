/**
 * @swagger
 * /api/instructor/dashboard:
 *   get:
 *     summary: Instructor Dashboard
 *     description: Retrieve a summary of users, orders for the instructor dashboard.
 *     tags:
 *       - Instructor
 *     responses:
 *       200:
 *         description: Successfully retrieved summary.
 *         content:
 *           application/json:
 *             schema:
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

app.get('/api/instructor/dashboard', (req, res) => { });

/**
 * @swagger
 *  /api/instructor/invoice:
 *   get:
 *     summary: Get Invoice
 *     description: Retrieve a list of invoices.
 *     tags:
 *       - Instructor
 *     responses:
 *       200:
 *         description: Successfully retrieved the list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Invoice'
 *       404:
 *         description: No invoice found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/instructor/invoice', (req, res) => {});

/**
 * @swagger
 * /api/instructor/category:
 *   post:
 *     summary: Add a Category
 *     description: Add a new category to the list.
 *     tags:
 *       - Instructor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 
 *     responses:
 *       201:
 *         description: category added successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.post('/api/instructor/category', (req, res) => { });

/**
 * @swagger
 * /api/instructor/category/{id}:
 *   delete:
 *     summary: delete a Category
 *     description: delete category in the list.
 *     tags:
 *       - Instructor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: category deleted successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.delete('/api/instructor/category/:id', (req, res) => {});

/**
 * @swagger
 * /api/instructor/category:
 *   get:
 *     summary: Get category List
 *     description: Retrieve a list of category.
 *     tags:
 *       - Instructor
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of category.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       404:
 *         description: No category found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/instructor/category', (req, res) => {});

/**
 * @swagger
 * /api/instructor/faq/{id}:
 *   delete:
 *     summary: Delete a faq
 *     description: delete a faq from the list.
 *     tags:
 *       - Instructor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: faq deleted successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.delete('/api/instructor/faq/:id', (req, res) => {});

/**
 * @swagger
 * /api/instructor/faq:
 *   get:
 *     summary: Get faq List
 *     description: Retrieve a list of faq.
 *     tags:
 *       - Instructor
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of faq.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *       404:
 *         description: No faq found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/instructor/faq', (req, res) => {});

/**
 * @swagger
 * /api/instructor/faq:
 *   post:
 *     summary: Add a faq
 *     description: Add a new faq to the list.
 *     tags:
 *       - Instructor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 
 *     responses:
 *       201:
 *         description: faq added successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.post('/api/instructor/faq', (req, res) => { });
