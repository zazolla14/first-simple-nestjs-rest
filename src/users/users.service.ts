import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './create-user.dto'
import { User } from './user.entity'

@Injectable()
export class UsersService {
        constructor(
                @InjectRepository(User)
                private readonly usersRepository: Repository<User>,
        ) {}

        async findAll() {
                return await this.usersRepository.find()
        }

        async findOne(id: number) {
                return await this.usersRepository.findOneOrFail(id)
        }

        async create(data: CreateUserDto) {
                return await this.usersRepository.save(data)
        }

        async update(id: number, data: CreateUserDto) {
                return await this.usersRepository.save({
                        id: Number(id),
                        ...data,
                })
        }

        async delete(id: number) {
                return await this.usersRepository.delete(id)
        }
}
