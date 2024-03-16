
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
 *        
 */
app.get('/admin/dashboard', (req, res) => { });

/**
 * @swagger
 *  /api/admin/invoice:
 *   get:
 *     summary: Get Invoice
 *     description: Retrieve a list of invoices.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved the list.
 *         content:
 *           application/json:
 *       404:
 *         description: No invoice found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/invoice', (req, res) => {});

/**
 * @swagger
 * /api/admin/category:
 *   post:
 *     summary: Add a Category
 *     description: Add a new category to the list.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *                 
 *     responses:
 *       201:
 *         description: category added successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.post('/api/admin/category', (req, res) => { });

/**
 * @swagger
 * /api/admin/category/{id}:
 *   delete:
 *     summary: delete a Category
 *     description: delete category in the list.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *                 description: The id of the category.
 *     responses:
 *       201:
 *         description: category deleted successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.delete('/api/admin/category/:id', (req, res) => {});

/**
 * @swagger
 * /api/admin/category:
 *   get:
 *     summary: Get category List
 *     description: Retrieve a list of category.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of category.
 *         content:
 *           application/json:
 *       404:
 *         description: No category found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/faq', (req, res) => {});

/**
 * @swagger
 * /api/admin/faq/{id}:
 *   delete:
 *     summary: Delete a faq
 *     description: delete a faq from the list.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               faqId:
 *                 type: string
 *                 
 *     responses:
 *       201:
 *         description: faq deleted successfully.
 *       400:
 *         description: Bad request, input validation failed.
 */
app.post('/admin/faq/:id', (req, res) => {});

/**
 * @swagger
 * /api/admin/faq:
 *   get:
 *     summary: Get faq List
 *     description: Retrieve a list of faq.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of faq.
 *         content:
 *           application/json:
 *       404:
 *         description: No faq found.
 *       500:
 *         description: Internal server error.
 */
app.get('/api/admin/faq', (req, res) => {});

/**
 * @swagger
 * /api/admin/faq:
 *   post:
 *     summary: Add a faq
 *     description: Add a new faq to the list.
 *     tags:
 *       - Admin
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
app.post('/api/admin/faq', (req, res) => { });


