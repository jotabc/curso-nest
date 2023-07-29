import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'Cat 1',
      age: 1,
      breed: 'Breed 1',
    },
    {
      id: 2,
      name: 'Cat 2',
      age: 2,
      breed: 'Breed 2',
    },
  ];

  create(createCatDto: CreateCatDto) {
    const cat = {
      ...createCatDto,
      id: this.cats.length + 1,
    };
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
