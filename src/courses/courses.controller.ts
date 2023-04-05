import { Body, Controller, Get, Res, Param, Post, Patch } from '@nestjs/common';

@Controller('courses')
export default class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Lista de Users');
  }
  @Post()
  create(@Body() body) {
    //qualquer coisa
    console.log(body);
    return body;
  }
  //recebe apenas o id
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `O id é: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(id);
    return `Atualizando o curso de id: ${id}`;
  }
}
