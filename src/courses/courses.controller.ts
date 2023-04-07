import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export default class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }
  //recebe apenas o id
  @Get(':id')
  findOne(@Param('id') id: string) {
    const course = this.coursesService.findOne(id);
    if (!course) {
      throw new HttpException(
        `Course id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
