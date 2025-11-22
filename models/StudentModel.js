/*import pool from '../config/db.js';

export const getStudents = async () =>{
    const[rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
}

export const insertStudent = async (name, srcode, course) =>{
    const [result] = await pool.query(
        "INSERT INTO tblStudent(name, srcode, course) VALUES (?,?,?)", 
        [name, srcode, course]
    );
    return result.insertId;
}

export const updateSudent = async (name, srcode, course, studentId) =>{
    const [result] = await pool.query(
        "UPDATE tblStudent SET name=?, srcode=?, course=? WHERE id=?",
        [name, srcode, course, studentId]
    );
    return result.affectedRows;
}
export const deleteStudent = async (studentId) =>{
    const [result] = await pool.query(
        "DELETE FROM tblStudent WHERE id=?", [studentId]
    );
    return result.affectedRows;
}*/

import pool from '../config/db.js';

export const getStudents = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM tblStudent");
    return rows;
  } catch (error) {
    console.error("Error getting students:", error);
    throw error;
  }
}

export const insertStudent = async (name, srcode, course) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO tblStudent(name, srcode, course) VALUES (?, ?, ?)",
      [name, srcode, course]
    );
    return result.insertId;
  } catch (error) {
    console.error("Error inserting student:", error);
    throw error;
  }
}

export const updateStudent = async (name, srcode, course, studentId) => {
  try {
    const [result] = await pool.query(
      "UPDATE tblStudent SET name = ?, srcode = ?, course = ? WHERE id = ?",
      [name, srcode, course, studentId]
    );
    return result.affectedRows;
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
}

export const deleteStudent = async (studentId) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM tblStudent WHERE id = ?",
      [studentId]
    );
    return result.affectedRows;
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
}

