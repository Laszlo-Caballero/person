import { HttpException, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  findAll() {
    return this.personRepository.find();
  }

  async findOne(id: number) {
    const person = await this.personRepository.findOne({
      where: { id },
    });

    if (!person) {
      throw new HttpException(`Person with id ${id} not found`, 404);
    }
    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepository.findOne({
      where: { id },
    });

    if (!person) {
      throw new HttpException(`Person with id ${id} not found`, 404);
    }

    return this.personRepository.update(id, updatePersonDto);
  }

  async remove(id: number) {
    const person = await this.personRepository.findOne({
      where: { id },
    });

    if (!person) {
      throw new HttpException(`Person with id ${id} not found`, 404);
    }

    return this.personRepository.remove(person);
  }
}
