import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';

import { CreatePostBlogDto } from './create-post-blog.dto';

export class UpdatePostBlogDto extends PartialType(CreatePostBlogDto) {}
