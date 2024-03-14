import mongoose  from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
    });

export const Todos = mongoose.model("Todos", todoSchema);