import { Module } from '@nestjs/common';
import { PostBlogService } from './post-blog.service';
import { PostBlogController } from './post-blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postBlogSchema } from './Schema/post-blog.schema';
import { commentSchema } from '../comments/Schema/comment.schema';
import { CommentsService } from 'src/comments/comments.service';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'PostBlog',
        schema: postBlogSchema
      }
    ]),
    CommentsModule
  ],
  controllers: [PostBlogController],
  providers: [PostBlogService]
})
export class PostBlogModule {}
