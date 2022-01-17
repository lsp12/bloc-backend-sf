"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBlogController = void 0;
const common_1 = require("@nestjs/common");
const post_blog_service_1 = require("./post-blog.service");
const create_post_blog_dto_1 = require("./dto/create-post-blog.dto");
const update_post_blog_dto_1 = require("./dto/update-post-blog.dto");
let PostBlogController = class PostBlogController {
    constructor(postBlogService) {
        this.postBlogService = postBlogService;
    }
    create(createPostBlogDto) {
        createPostBlogDto.userid = createPostBlogDto.user;
        return this.postBlogService.create(createPostBlogDto);
    }
    findAll(user) {
        return this.postBlogService.findAll();
    }
    findOne(id) {
        return this.postBlogService.findOne(id);
    }
    findUser(request, n) {
        const id = request.headers.user;
        console.log(id);
        if (typeof id === 'string') {
            return this.postBlogService.findByUserId(id);
        }
    }
    findByTitle(title) {
        return this.postBlogService.findByTitle(title);
    }
    findByName(name) {
        return this.postBlogService.findByUser(name);
    }
    findByEmail(email) {
        return this.postBlogService.findByEmail(email);
    }
    update(id, updatePostBlogDto) {
        return this.postBlogService.update(id, updatePostBlogDto);
    }
    addComment(id, updatePostBlogDto) {
        return this.postBlogService.addComment(id, updatePostBlogDto);
    }
    addCommentUp(id, updatePostBlogDto) {
        return this.postBlogService.updateComment(id, updatePostBlogDto);
    }
    remove(id) {
        console.log(id);
        return this.postBlogService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_blog_dto_1.CreatePostBlogDto]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('postmy/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)(':title/title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "findByTitle", null);
__decorate([
    (0, common_1.Get)(':name/name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('/:id/email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_blog_dto_1.UpdatePostBlogDto]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_blog_dto_1.UpdatePostBlogDto]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "addComment", null);
__decorate([
    (0, common_1.Put)(':id/commentsUp'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_blog_dto_1.UpdatePostBlogDto]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "addCommentUp", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostBlogController.prototype, "remove", null);
PostBlogController = __decorate([
    (0, common_1.Controller)('post-blog'),
    __metadata("design:paramtypes", [post_blog_service_1.PostBlogService])
], PostBlogController);
exports.PostBlogController = PostBlogController;
//# sourceMappingURL=post-blog.controller.js.map