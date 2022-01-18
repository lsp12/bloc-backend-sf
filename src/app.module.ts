import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ValidationPipe } from './validation.pipe';
import { PostBlogModule } from './post-blog/post-blog.module';
import { CommentsModule } from './comments/comments.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PostBlogController } from './post-blog/post-blog.controller';
import { CommentsController } from './comments/comments.controller';

@Module({
  /* imports: [MongooseModule.forRoot('mongodb+srv://lsp12:blocsumifru@cluster0.oax48.mongodb.net/BlogSumifru?retryWrites=true&w=majority')], */
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Cris:159753@cluster0.ygdw3.mongodb.net/lectormanga?retryWrites=true&w=majority'
    ),
    UsersModule,
    PostBlogModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService, ValidationPipe]
})
export class AppModule {
  configure(consume: MiddlewareConsumer) {
    consume
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'post-blog', method: RequestMethod.GET },
        { path: 'post-blog/:id', method: RequestMethod.GET },
        { path: 'post-blog/:title/title', method: RequestMethod.GET },
        { path: 'coments/:id', method: RequestMethod.GET }
      )
      .forRoutes(PostBlogController, CommentsController, 'users/onlyuser/');
  }
}
