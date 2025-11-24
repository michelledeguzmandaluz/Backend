import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) => {
  try {
    const students = await StudentModel.getStudents();
    res.status(200).json({ success: true, data: students });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const createStudents = async (req, res) => {
  const { name, srcode, course } = req.body;
  try {
    const studentId = await StudentModel.insertStudent(name, srcode, course);
    res.status(201).json({ success: true, data: { id: studentId } });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const editStudents = async (req, res) => {
  const { name, srcode, course } = req.body;
  const { studentId } = req.params;
  try {
    const affectedRows = await StudentModel.updateStudent(name, srcode, course, studentId);
    res.status(200).json({ success: true, data: { affectedRows } });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const deleteStudents = async (req, res) => {
  const { studentId } = req.params;
  try {
    const affectedRows = await StudentModel.deleteStudent(studentId);
    res.status(200).json({ success: true, data: { affectedRows } });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
