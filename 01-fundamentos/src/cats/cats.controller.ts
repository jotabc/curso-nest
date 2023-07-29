import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // promises
  /* @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
  } */

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  // como en express del body obtenemos la información que estamos creando
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
