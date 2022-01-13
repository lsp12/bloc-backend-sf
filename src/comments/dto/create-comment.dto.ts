import { IsMongoId, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsMongoId()
  userId: string;

  @IsString()
  comment: string;

  @IsMongoId()
  postBlogId: string;
}
