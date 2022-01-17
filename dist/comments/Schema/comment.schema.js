"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.commentSchema = new mongoose_1.Schema({
    postBlogId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PostBlog'
    },
    comment: {
        type: String
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, {
    timestamps: true
});
//# sourceMappingURL=comment.schema.js.map