/*import * as StudentController from  '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudents);
studentRoutes.put('/edit/:studentId', StudentController.editStudents);
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudents);

export default studentRoutes;*/

import * as StudentController from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

// Get all students
studentRoutes.get('/all', StudentController.fetchStudents);

// Add a new student
studentRoutes.post('/new', StudentController.createStudents);

// Update a student by ID
studentRoutes.put('/edit/:studentId', StudentController.editStudents);

// Delete a student by ID
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudents);

export default studentRoutes;
