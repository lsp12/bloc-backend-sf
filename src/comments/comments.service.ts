import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comment') private commentsModule: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new this.commentsModule(createCommentDto);
    return await comment.save();
  }

  async findAll(): Promise<Comment[]> {
    const comments = await this.commentsModule.find();
    return comments;
  }

  async findByPost(id: string): Promise<Comment[]> {
    const comments = await this.commentsModule.find({
      postBlogId: id
    });
    if (comments.length === 0) throw new NotFoundException('Comment not found');
    return comments;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.commentsModule.findByIdAndUpdate(id, updateCommentDto);
    return `updated successfully`;
  }

  async remove(id: number) {
    await this.commentsModule.findByIdAndRemove(id);
    return `deleted successfully`;
  }
}
