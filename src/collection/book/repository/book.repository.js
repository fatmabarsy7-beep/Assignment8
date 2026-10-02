import {Book} from "../model/book.model.js";


export async function createBook(bookData) {
  return await  Book.create(bookData)
}
export async function createBooks(bookData) {
    return await Book.insertMany(bookData)
}

export async function getBookByTitle(title) {
    return await Book.findOne(title)
}

export async function getAllBooks() {
  return await Book.find();
}

export async function updateBookByTitle(title, year) {
  return await Book.updateOne(
    { title: title },
    {
      $set: {
        year: year
      }
    }
  );
}

export async function getBookByTitle(title) {
  return await Book.findOne({
    title: title
  });
}

export async function getBooksBetweenYears(from, to) {
  return await Book.find({
    year: {
      $gte: Number(from),
      $lte: Number(to)
    }
  });
}

export async function getBooksByGenre(gener){
    return await Book.find({
        geners:gener
    })
}


export async function getBooksWithIntegerYear(){
    return await Book.find({
       year: {
      $type: "int"
    }
    });
}

// 14
export async function getBooksExcludeGenres() {
  return await Book.find({
    genres: {
      $nin: ["Horror", "Science Fiction"]
    }
  });
}

// 15
export async function deleteBooksBeforeYear(year) {
  return await Book.deleteMany({
    year: {
      $lt: Number(year)
    }
  });
}

// 16
export async function aggregateBooks1() {
  return await Book.aggregate([
    {
      $match: {
        year: {
          $gt: 2000
        }
      }
    },
    {
      $sort: {
        year: -1
      }
    }
  ]);
}

// 17
export async function aggregateBooks2() {
  return await Book.aggregate([
    {
      $match: {
        year: {
          $gt: 2000
        }
      }
    },
    {
      $project: {
        _id: 0,
        title: 1,
        author: 1,
        year: 1
      }
    }
  ]);
}

// 18
export async function aggregateBooks3() {
  return await Book.aggregate([
    {
      $unwind: "$genres"
    },
    {
      $project: {
        _id: 0,
        title: 1,
        genres: 1
      }
    }
  ]);
}

// 19
export async function aggregateBooks4() {
  return await Book.aggregate([
    {
      $lookup: {
        from: "books",
        localField: "book_id",
        foreignField: "_id",
        as: "book_details"
      }
    },
    {
      $unwind: "$book_details"
    },
    {
      $project: {
        _id: 0,
        action: 1,
        book_details: {
          title: 1,
          author: 1,
          year: 1
        }
      }
    }
  ]);
}

