import { Schema } from 'mongoose';

export const commentSchema = new Schema(
  {
    postBlogId: {
      type: Schema.Types.ObjectId,
      ref: 'PostBlog'
    },
    comment: {
      type: String
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);
