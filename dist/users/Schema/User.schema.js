"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    nameUser: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    position: {
        type: String
    },
    postBlog: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PostBlog'
    }
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.__v;
        }
    }
});
//# sourceMappingURL=User.schema.js.map