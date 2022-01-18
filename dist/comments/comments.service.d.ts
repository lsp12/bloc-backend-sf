import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
export declare class CommentsService {
    private commentsModule;
    constructor(commentsModule: Model<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findByPost(id: string): Promise<Comment[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<string>;
    remove(id: string): Promise<string>;
    deleteByPost(id: string): Promise<string>;
}
