import { Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{type}]
  }
  // GET /ninjas/:id
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {id}
  }
  // POST -> /ninjas
  @Post()
  createNinja() {

  }
  // PUT /ninjas/:id
  @Put(':id')
  updateNinja(@Param('id') id: string) {

  }
  // DELETE delete /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {

  }
}
