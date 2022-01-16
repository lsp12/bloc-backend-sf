import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { CreatePostBlogDto } from './dto/create-post-blog.dto';
import { UpdatePostBlogDto } from './dto/update-post-blog.dto';
import { PostBlog } from './entities/post-blog.entity';

@Injectable()
export class PostBlogService {
  constructor(
    @InjectModel('PostBlog') private postblogModel: Model<PostBlog>
  ) {}
  async create(createPostBlogDto: CreatePostBlogDto): Promise<PostBlog> {
    const postblog = new this.postblogModel(createPostBlogDto);
    return await postblog.save();
  }

  async findAll(): Promise<PostBlog[]> {
    //hacer consulta anidada para traer los usuarios que han creado el post
    const postblogs = await this.postblogModel.find().populate({
      path: 'userid'
    });
    return postblogs;
  }

  async findByUserId(id: string): Promise<PostBlog[]> {
    const postblogs = await this.postblogModel
      .find({
        userid: id
      })
      .populate({
        path: 'userid'
      });
    if (postblogs.length === 0)
      throw new NotFoundException('PostBlog not found');
    return postblogs;
  }

  async findByUser(name: string): Promise<PostBlog[]> {
    const postblogs = await this.postblogModel
      .find({
        nameUser: {
          $regex: name,
          $options: 'i'
        }
      })
      .populate('User');
    if (postblogs.length === 0)
      throw new NotFoundException('PostBlog not found');
    return postblogs;
  }

  async findByTitle(title: string): Promise<PostBlog[]> {
    const postblogs = await this.postblogModel.find({
      title: {
        $regex: title,
        $options: 'i'
      }
    });
    if (postblogs.length === 0)
      throw new NotFoundException('PostBlog not found');
    return postblogs;
  }

  async findByEmail(email: string): Promise<PostBlog[]> {
    const postblogs = await this.postblogModel
      .find({
        email: {
          $regex: email,
          $options: 'i'
        }
      })
      .populate('User');
    if (postblogs.length === 0)
      throw new NotFoundException('PostBlog not found');
    return postblogs;
  }

  async findOne(id: string): Promise<PostBlog> {
    const postblog = await this.postblogModel.findOne({ _id: id }).populate({
      path: 'userid'
    });
    if (!postblog) throw new NotFoundException('PostBlog not found');
    return postblog;
  }

  async update(id: string, updatePostBlogDto: UpdatePostBlogDto) {
    await this.postblogModel.findByIdAndUpdate(id, updatePostBlogDto);
    return 'PostBlog updated successfully';
  }

  async addComment(id: string, updatePostBlogDto: UpdatePostBlogDto) {
    /* updatePostBlogDto.comments.createdAt = new Date(); */
    const update = await this.postblogModel.findByIdAndUpdate(id, {
      comments: {
        $push: updatePostBlogDto
      }
    });
    console.log(update);
    return 'Comment added successfully';
  }

  async updateComment(id: string, updatePostBlogDto: UpdatePostBlogDto) {
    /* updatePostBlogDto.comments.updatedAt = new Date(); */

    const exist = await this.postblogModel.find({
      'comments.userid': id
    });

    console.log(exist);

    /* const update = await this.postblogModel.findOneAndUpdate(
      {
        _id: id,
        'comments.comment': updatePostBlogDto.commentsAfte,
      },
      {
        $inc: { comments: updatePostBlogDto },
      },
    );
    console.log(update); */
    return 'Comment added successfully';
  }

  async remove(id: string) {
    await this.postblogModel.findByIdAndRemove(id);
    return 'PostBlog removed successfully';
  }
}
