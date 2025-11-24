import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) => {
  try {
    const books = await BookModel.getBooks();
    res.status(200).json({ success: true, data: books });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const createBooks = async (req, res) => {
  const { title, genre, status } = req.body;
  try {
    const bookId = await BookModel.insertBook(title, genre, status);
    res.status(201).json({ success: true, data: { id: bookId } });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const editBooks = async (req, res) => {
  const { title, genre, status } = req.body;
  const { bookId } = req.params;
  try {
    const affectedRows = await BookModel.updateBook(title, genre, status, bookId);
    res.status(200).json({ success: true, data: { affectedRows } });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const deleteBooks = async (req, res) => {
  const { bookId } = req.params;
  try {
    const affectedRows = await BookModel.deleteBook(bookId);
    res.status(200).json({ success: true, data: { affectedRows } });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
