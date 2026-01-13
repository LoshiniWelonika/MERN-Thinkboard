import mongoose from "mongoose";

// 1. Create schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // creates createdAt and updatedAt automatically
  }
);

// 2. Create model
const Note = mongoose.model("Note", noteSchema);

export default Note;
