import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';

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

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) uuid: string) {
    return this.catsService.findOne(uuid);
  }

  // como en express del body obtenemos la información que estamos creando
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) uuid: string) {
    return this.catsService.remove(uuid);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) uuid: string,
    @Body() updateDto: UpdateCatDto,
  ) {
    return this.catsService.update(uuid, updateDto);
  }
}
