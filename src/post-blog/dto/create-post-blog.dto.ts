import {
  isArray,
  IsArray,
  isHash,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';

export class CreatePostBlogDto {
  @IsOptional()
  user: string;

  @IsOptional()
  userid: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
