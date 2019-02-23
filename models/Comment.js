import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const comment = mongoose.model("Comment", CommentSchema);
export default comment;