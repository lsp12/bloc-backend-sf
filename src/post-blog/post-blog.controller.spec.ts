import { Test, TestingModule } from '@nestjs/testing';
import { PostBlogController } from './post-blog.controller';
import { PostBlogService } from './post-blog.service';

describe('PostBlogController', () => {
  let controller: PostBlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostBlogController],
      providers: [PostBlogService],
    }).compile();

    controller = module.get<PostBlogController>(PostBlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
