import { Test, TestingModule } from '@nestjs/testing';
import { PostBlogService } from './post-blog.service';

describe('PostBlogService', () => {
  let service: PostBlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostBlogService],
    }).compile();

    service = module.get<PostBlogService>(PostBlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
