import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { bcryptCompare, bcryptPassword } from './bcrypt/bcryptUser';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private userModel: Model<User>) {}

  async Login(email: string, password: string) {
    const user = await this.userModel.findOne({ email: email });
    if (!user) throw new NotFoundException('User not found');
    const isValid = await bcryptCompare(password, user.password);
    if (!isValid) throw new NotFoundException('Password not valid');
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const exist = await this.userModel.findOne({ email: createUserDto.email });
    if (exist) throw new ConflictException('Email already exist');
    createUserDto.password = await bcryptPassword(createUserDto.password);
    const user = await this.userModel.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findByEmail(email: string): Promise<User[]> {
    const users = await this.userModel.find({
      email: {
        $regex: email,
        $options: 'i'
      }
    });
    if (users.length === 0) throw new NotFoundException('User not found');
    return users;
  }

  async findByName(name: string): Promise<User[]> {
    const users = await this.userModel.find({
      nameUser: {
        $regex: name,
        $options: 'i'
      }
    });
    if (users.length === 0) throw new NotFoundException('User not found');
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
    return 'User updated successfully';
  }

  async remove(id: string) {
    await this.userModel.findByIdAndRemove(id);
    return 'User deleted successfully';
  }
}
