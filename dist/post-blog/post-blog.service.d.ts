import { Model } from 'mongoose';
import { CreatePostBlogDto } from './dto/create-post-blog.dto';
import { UpdatePostBlogDto } from './dto/update-post-blog.dto';
import { PostBlog } from './entities/post-blog.entity';
export declare class PostBlogService {
    private postblogModel;
    constructor(postblogModel: Model<PostBlog>);
    create(createPostBlogDto: CreatePostBlogDto): Promise<PostBlog>;
    findAll(): Promise<PostBlog[]>;
    findByUserId(id: string): Promise<PostBlog[]>;
    findByUser(name: string): Promise<PostBlog[]>;
    findByTitle(title: string): Promise<PostBlog[]>;
    findByEmail(email: string): Promise<PostBlog[]>;
    findOne(id: string): Promise<PostBlog>;
    update(id: string, updatePostBlogDto: UpdatePostBlogDto): Promise<string>;
    addComment(id: string, updatePostBlogDto: UpdatePostBlogDto): Promise<string>;
    updateComment(id: string, updatePostBlogDto: UpdatePostBlogDto): Promise<string>;
    remove(id: string): Promise<string>;
}