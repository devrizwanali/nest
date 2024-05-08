import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { NotFoundException, ParseIntPipe, ValidationPipe } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  // GET /ninjas
  @Get()
  getNinjas(@Query('type') type: 'Intermediate' | 'Expert') {
    return this.ninjasService.getNinjas(type);
  }
  // GET /ninjas/:id
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getNinja(id);
    } catch(err) {
      throw new NotFoundException();
    }
  }
  // POST -> /ninjas
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }
  // PUT /ninjas/:id
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }
  // DELETE delete /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
