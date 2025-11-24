import * as StudentController from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();


studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudents);
studentRoutes.put('/edit/:studentId', StudentController.editStudents);
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudents);

export default studentRoutes;
