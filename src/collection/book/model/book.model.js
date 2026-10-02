import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    author: {
      type: String,
      required: true,
      trim: true
    },

    year: {
      type: Number,
      required: true
    },

    genres: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Book = model("Book", bookSchema);