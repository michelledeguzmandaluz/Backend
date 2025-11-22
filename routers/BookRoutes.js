/*import * as BookController from  '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);
bookRoutes.post('/new', BookController.createBooks);
bookRoutes.put('/edit/:bookId', BookController.editBooks);
bookRoutes.delete('/delete/:bookId', BookController.deleteBooks);


export default bookRoutes;*/

import * as BookController from '../controllers/BookController.js';
import express from "express";
import authHandler from '../middleware/authHandler.js';

const bookRoutes = express.Router();

bookRoutes.get(authHandler);

// Get all books
bookRoutes.get('/all', BookController.fetchBooks);

// Add a new book
bookRoutes.post('/new', BookController.createBooks);

// Update a book by ID
bookRoutes.put('/edit/:bookId', BookController.editBooks);

// Delete a book by ID
bookRoutes.delete('/delete/:bookId', BookController.deleteBooks);

export default bookRoutes;
