import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsOptional()
  user: string;

  @IsOptional()
  userId: string;

  @IsString()
  comment: string;

  @IsMongoId()
  postBlogId: string;
}
