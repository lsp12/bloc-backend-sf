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
exports.PostBlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PostBlogService = class PostBlogService {
    constructor(postblogModel) {
        this.postblogModel = postblogModel;
    }
    async create(createPostBlogDto) {
        const postblog = new this.postblogModel(createPostBlogDto);
        return await postblog.save();
    }
    async findAll() {
        const postblogs = await this.postblogModel
            .find()
            .sort({
            createdAt: -1
        })
            .populate({
            path: 'userid'
        });
        return postblogs;
    }
    async findByUserId(id) {
        const postblogs = await this.postblogModel
            .find({
            userid: id
        })
            .sort({
            createdAt: -1
        })
            .populate({
            path: 'userid'
        });
        if (postblogs.length === 0)
            return [];
        return postblogs;
    }
    async findByUser(name) {
        const postblogs = await this.postblogModel
            .find({
            nameUser: {
                $regex: name,
                $options: 'i'
            }
        })
            .populate('Users');
        if (postblogs.length === 0)
            throw new common_1.NotFoundException('PostBlog not found');
        return postblogs;
    }
    async findByTitle(title) {
        const postblogs = await this.postblogModel
            .find({
            title: {
                $regex: title,
                $options: 'i'
            }
        })
            .populate({
            path: 'userid'
        });
        if (postblogs.length === 0)
            throw new common_1.NotFoundException('PostBlog not found');
        return postblogs;
    }
    async findByEmail(email) {
        const postblogs = await this.postblogModel
            .find({
            email: {
                $regex: email,
                $options: 'i'
            }
        })
            .populate('User');
        if (postblogs.length === 0)
            throw new common_1.NotFoundException('PostBlog not found');
        return postblogs;
    }
    async findOne(id) {
        const postblog = await this.postblogModel.findOne({ _id: id }).populate({
            path: 'userid'
        });
        if (!postblog)
            throw new common_1.NotFoundException('PostBlog not found');
        return postblog;
    }
    async findByEmailOrNameOrTitle(email, name, title) {
        const postblogs = await this.postblogModel
            .find({
            $or: [
                {
                    nameUser: name
                }
            ]
        })
            .populate({
            path: 'userid'
        });
        console.log(postblogs);
        if (postblogs.length === 0)
            throw new common_1.NotFoundException('PostBlog not found');
        return postblogs;
    }
    async update(id, updatePostBlogDto) {
        await this.postblogModel.findByIdAndUpdate(id, updatePostBlogDto);
        return 'PostBlog updated successfully';
    }
    async addComment(id, updatePostBlogDto) {
        const update = await this.postblogModel.findByIdAndUpdate(id, {
            comments: {
                $push: updatePostBlogDto
            }
        });
        console.log(update);
        return 'Comment added successfully';
    }
    async updateComment(id, updatePostBlogDto) {
        const exist = await this.postblogModel.find({
            'comments.userid': id
        });
        console.log(exist);
        return 'Comment added successfully';
    }
    async remove(id) {
        await this.postblogModel.findByIdAndRemove(id);
        return 'PostBlog removed successfully';
    }
};
PostBlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('PostBlog')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostBlogService);
exports.PostBlogService = PostBlogService;
//# sourceMappingURL=post-blog.service.js.map