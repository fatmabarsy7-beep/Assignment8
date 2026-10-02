import mongoose from "mongoose";

// 1
export async function createBooksCollection() {
  return await mongoose.connection.db.createCollection("books", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title"],
        properties: {
          title: {
            bsonType: "string",
            minLength: 1
          }
        }
      }
    }
  });
}

// 3
export async function createCappedLogsCollection() {
  return await mongoose.connection.db.createCollection("logs", {
    capped: true,
    size: 1048576
  });
}

// 4
export async function createBookTitleIndex() {
  return await mongoose.connection.db
    .collection("books")
    .createIndex({
      title: 1
    });
}