import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
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

  create(createCourseDto: any) {
    return this.courseRepository.create(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const courseUpdate = this.courseRepository.update(id, updateCourseDto);
    if (!courseUpdate) {
      throw new NotFoundException(`Course ID ${id} not updated`);
    }
    return courseUpdate;
  }

  remove(id: string) {
    const courseRemove = this.courseRepository.delete(id);
    return courseRemove;
  }
}
