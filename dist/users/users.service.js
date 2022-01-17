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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcryptUser_1 = require("./bcrypt/bcryptUser");
const jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    generateAuthToken(user) {
        const token = jwt.sign({ user: user._id.toString() }, 'sumifru', {
            expiresIn: 36000
        });
        return token;
    }
    async Login(email, password) {
        const user = await this.userModel.findOne({ email: email });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const isValid = await (0, bcryptUser_1.bcryptCompare)(password, user.password);
        if (!isValid)
            throw new common_1.NotFoundException('Password not valid');
        const token = this.generateAuthToken(user);
        return token;
    }
    async create(createUserDto) {
        const exist = await this.userModel.findOne({ email: createUserDto.email });
        if (exist)
            throw new common_1.ConflictException('Email already exist');
        createUserDto.password = await (0, bcryptUser_1.bcryptPassword)(createUserDto.password);
        const user = await this.userModel.create(createUserDto);
        return user;
    }
    async findAll() {
        const users = await this.userModel.find();
        return users;
    }
    async findOne(id) {
        const user = await this.userModel.findOne({ _id: id });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async findByEmail(email) {
        const users = await this.userModel.find({
            email: {
                $regex: email,
                $options: 'i'
            }
        });
        if (users.length === 0)
            throw new common_1.NotFoundException('User not found');
        return users;
    }
    async findByName(name) {
        const users = await this.userModel.find({
            nameUser: {
                $regex: name,
                $options: 'i'
            }
        });
        if (users.length === 0)
            throw new common_1.NotFoundException('User not found');
        return users;
    }
    async update(id, updateUserDto) {
        await this.userModel.findByIdAndUpdate(id, updateUserDto);
        return 'User updated successfully';
    }
    async remove(id) {
        await this.userModel.findByIdAndRemove(id);
        return 'User deleted successfully';
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map