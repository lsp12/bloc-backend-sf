"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBlogSchema = void 0;
const mongoose_1 = require("mongoose");
exports.postBlogSchema = new mongoose_1.Schema({
    userid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Users'
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
}, {
    timestamps: true
});
//# sourceMappingURL=post-blog.schema.js.map