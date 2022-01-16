import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { PostBlogService } from './post-blog.service';
import { CreatePostBlogDto } from './dto/create-post-blog.dto';
import { UpdatePostBlogDto } from './dto/update-post-blog.dto';

@Controller('post-blog')
export class PostBlogController {
  constructor(private readonly postBlogService: PostBlogService) {}

  @Post()
  create(@Body() createPostBlogDto: CreatePostBlogDto) {
    return this.postBlogService.create(createPostBlogDto);
  }

  @Get()
  findAll(@Body() user: string) {
    return this.postBlogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postBlogService.findOne(id);
  }

  @Get('mypost/:id')
  findByUserId(@Param('id') id: string) {
    return this.postBlogService.findByUserId(id);
  }

  @Get(':title/title')
  findByTitle(@Param('title') title: string) {
    return this.postBlogService.findByTitle(title);
  }

  @Get(':name/name')
  findByName(@Param('name') name: string) {
    return this.postBlogService.findByUser(name);
  }

  @Get('/:id/email')
  findByEmail(@Param('email') email: string) {
    return this.postBlogService.findByEmail(email);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostBlogDto: UpdatePostBlogDto
  ) {
    return this.postBlogService.update(id, updatePostBlogDto);
  }

  @Put(':id/comments')
  addComment(
    @Param('id') id: string,
    @Body() updatePostBlogDto: UpdatePostBlogDto
  ) {
    return this.postBlogService.addComment(id, updatePostBlogDto);
  }

  @Put(':id/commentsUp')
  addCommentUp(
    @Param('id') id: string,
    @Body() updatePostBlogDto: UpdatePostBlogDto
  ) {
    return this.postBlogService.updateComment(id, updatePostBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postBlogService.remove(id);
  }
}
