import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';
import { Course } from './entity/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: string) {
    //A mudança do typeORM 0.2 para o 0.3 abandonou a função findOneBy
    //E a função findOne agora recebe um objeto com as propriedades da pesquisa.
    const course = this.courseRepository.findOne({
      where: { id: parseInt(id, 10) },
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const courseUpdate = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
    });
    if (!courseUpdate) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return this.courseRepository.save(courseUpdate);
  }

  async remove(id: string) {
    const courseToBeRemoved = await this.courseRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
    if (!courseToBeRemoved) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return this.courseRepository.save(courseToBeRemoved);
  }
}
