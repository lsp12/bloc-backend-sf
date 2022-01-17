import { PostBlogService } from './post-blog.service';
import { CreatePostBlogDto } from './dto/create-post-blog.dto';
import { UpdatePostBlogDto } from './dto/update-post-blog.dto';
import { Request } from 'express';
export declare class PostBlogController {
    private readonly postBlogService;
    constructor(postBlogService: PostBlogService);
    create(createPostBlogDto: CreatePostBlogDto): Promise<import("./entities/post-blog.entity").PostBlog>;
    findAll(user: string): Promise<import("./entities/post-blog.entity").PostBlog[]>;
    findOne(id: string): Promise<import("./entities/post-blog.entity").PostBlog>;
    findUser(request: Request, n: string): Promise<import("./entities/post-blog.entity").PostBlog[]>;
    findByTitle(title: string): Promise<import("./entities/post-blog.entity").PostBlog[]>;
    findByName(name: string): Promise<import("./entities/post-blog.entity").PostBlog[]>;
    findByEmail(email: string): Promise<import("./entities/post-blog.entity").PostBlog[]>;
    update(id: string, updatePostBlogDto: UpdatePostBlogDto): Promise<string>;
    addComment(id: string, updatePostBlogDto: UpdatePostBlogDto): Promise<string>;
    addCommentUp(id: string, updatePostBlogDto: UpdatePostBlogDto): Promise<string>;
    remove(id: string): Promise<string>;
}
