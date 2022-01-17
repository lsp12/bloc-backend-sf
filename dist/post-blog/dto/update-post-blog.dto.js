"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostBlogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_post_blog_dto_1 = require("./create-post-blog.dto");
class UpdatePostBlogDto extends (0, mapped_types_1.PartialType)(create_post_blog_dto_1.CreatePostBlogDto) {
}
exports.UpdatePostBlogDto = UpdatePostBlogDto;
//# sourceMappingURL=update-post-blog.dto.js.map