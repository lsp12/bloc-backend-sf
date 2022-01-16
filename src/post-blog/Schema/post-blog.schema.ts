import { Schema } from 'mongoose';

export const postBlogSchema = new Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    },
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);
