import pool from '../config/db.js';

export const getBooks = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM tblBook");
    return rows;
  } catch (error) {
    console.error("Error getting books:", error);
    throw error;
  }
}

export const insertBook = async (title, genre, status) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO tblBook(title, genre, status) VALUES (?, ?, ?)",
      [title, genre, status]
    );
    return result.insertId;
  } catch (error) {
    console.error("Error inserting book:", error);
    throw error;
  }
}

export const updateBook = async (title, genre, status, bookId) => {
  try {
    const [result] = await pool.query(
      "UPDATE tblBook SET title = ?, genre = ?, status = ? WHERE id = ?",
      [title, genre, status, bookId]
    );
    return result.affectedRows;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
}

export const deleteBook = async (bookId) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM tblBook WHERE id = ?",
      [bookId]
    );
    return result.affectedRows;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
}


