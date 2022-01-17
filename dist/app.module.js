"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const validation_pipe_1 = require("./validation.pipe");
const post_blog_module_1 = require("./post-blog/post-blog.module");
const comments_module_1 = require("./comments/comments.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
const post_blog_controller_1 = require("./post-blog/post-blog.controller");
const comments_controller_1 = require("./comments/comments.controller");
let AppModule = class AppModule {
    configure(consume) {
        consume
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes(post_blog_controller_1.PostBlogController, comments_controller_1.CommentsController, 'users/onlyuser/');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://Cris:159753@cluster0.ygdw3.mongodb.net/lectormanga?retryWrites=true&w=majority'),
            users_module_1.UsersModule,
            post_blog_module_1.PostBlogModule,
            comments_module_1.CommentsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, validation_pipe_1.ValidationPipe]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map