import { Router } from "express";

import {
  createBook,
  createBooks,
  updateBook,
  getBookByTitle,
  getBooksBetweenYears,
  getBooksByGenre,
  getBooksSkipLimit,
  getBooksWithIntegerYear,
  getBooksExcludeGenres,
  deleteBooksBeforeYear,
  aggregateBooks1,
  aggregateBooks2,
  aggregateBooks3
} from "./controller/book.controller.js";

const router = Router();

// 5
router.post("/books", createBook);

// 6
router.post("/books/batch", createBooks);

// 8
router.patch("/books/:title", updateBook);

// 9
router.get("/books/title", getBookByTitle);

// 10
router.get("/books/year", getBooksBetweenYears);

// 11
router.get("/books/genre", getBooksByGenre);

// 12
router.get("/books/skip-limit", getBooksSkipLimit);

// 13
router.get("/books/year-integer", getBooksWithIntegerYear);

// 14
router.get("/books/exclude-genres", getBooksExcludeGenres);

// 15
router.delete("/books/before-year", deleteBooksBeforeYear);

// 16
router.get("/books/aggregate1", aggregateBooks1);

// 17
router.get("/books/aggregate2", aggregateBooks2);

// 18
router.get("/books/aggregate3", aggregateBooks3);

export default router;