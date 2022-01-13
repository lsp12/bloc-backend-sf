import { Schema } from 'mongoose';

export const userSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: 'PostBlog'
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      }
    }
  }
);
