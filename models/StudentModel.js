import pool from '../config/db.js';

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
}
