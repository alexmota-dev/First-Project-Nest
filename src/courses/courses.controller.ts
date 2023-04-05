import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }
  @Post()
  @HttpCode(204)
  create() {
    //qualquer coisa
    return 'user criado';
  }
  //recebe apenas o id
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `O id é: ${id}`;
  }
}
