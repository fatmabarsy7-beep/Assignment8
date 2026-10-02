import * as bookRepository from "../repository/book.repository.js";

export async function createBook(bookData) {
   return await bookRepository.createBook(bookData);
}


export async function createBooks(bookData) {
     return await bookRepository.createBooks(bookData)

     if(!bookData) throw new error('this book not exist')
}

export async function getBookByTitle(title) {
    return await bookRepository.getBookByTitle(title)
}


export async function getAllBooks() {
    return await bookRepository.getAllBooks()
}

export async function updateBookByTitle(title, year) {
  return await bookRepository.updateBookByTitle(title, year);
}


export async function getBookByTitle(title) {
  return await bookRepository.getBookByTitle(title);
}


export async function getBooksBetweenYears(from, to) {
  return await bookRepository.getBooksBetweenYears(from, to);
}


export async function getBooksByGenre(genre) {
  return await bookRepository.getBooksByGenre(genre);
}

export async function getBooksSkipLimit() {
  return await bookRepository.getBooksSkipLimit();
}

export async function getBooksWithIntegerYear() {
  return await bookRepository.getBooksWithIntegerYear();
}

export async function getBooksExcludeGenres() {
  return await bookRepository.getBooksExcludeGenres();
}

export async function deleteBooksBeforeYear(year) {
  return await bookRepository.deleteBooksBeforeYear(year);
}

export async function aggregateBooks1() {
  return await bookRepository.aggregateBooks1();
}

export async function aggregateBooks2() {
  return await bookRepository.aggregateBooks2();
}

export async function aggregateBooks3() {
  return await bookRepository.aggregateBooks3();
}
