import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(email: string, password: string): Promise<any>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findEmail(email: string): Promise<import("./entities/user.entity").User[]>;
    findName(name: string): Promise<import("./entities/user.entity").User[]>;
    findOne(request: Request): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: string): Promise<string>;
}
