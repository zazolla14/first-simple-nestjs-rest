import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneOrFail(id);
  }

  create(data: CreateUserDto) {
    const user = new User();
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.email = data.email;
    user.isActive = data.isActive;
    return this.usersRepository.save(user);
  }

  update(id: number, data: CreateUserDto) {
    return this.usersRepository.save({ id: Number(id), ...data });
  }

  delete(id: number) {
    return this.usersRepository.delete(id);
  }
}
