import { Schema, model } from "mongoose";

const logsSchema = new Schema(
  {
    book_id: {
      type: Schema.Types.ObjectId,
      required: true
    },

    action: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Logs = model("Logs", logsSchema);