import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: uuidv4(),
      name: 'Cat 1',
      age: 1,
      breed: 'Breed 1',
    },
    {
      id: uuidv4(),
      name: 'Cat 2',
      age: 2,
      breed: 'Breed 2',
    },
  ];

  create(createCatDto: CreateCatDto) {
    const cat = {
      ...createCatDto,
      id: uuidv4(),
    };
    this.cats.push(cat);

    console.log(createCatDto);

    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    const cat = this.cats.find((cat) => cat.id === id);

    // debemos gestionar el código de error cuando no se encuentra el cat en este caso.
    if (!cat) throw new NotFoundException("Cat doesn't exist");

    return cat;
  }

  remove(id: string): Cat {
    const index = this.cats.findIndex((cat) => cat.id === id);

    if (index === -1) throw new NotFoundException("Cat doesn't exist");

    return this.cats.splice(index, 1)[0];
  }

  update(id: string, updateCatDto: UpdateCatDto): Cat {
    const index = this.cats.findIndex((cat) => cat.id === id);

    if (index === -1) throw new NotFoundException("Cat doesn't exist");

    const cat = {
      ...this.cats[index],
      ...updateCatDto,
    };

    this.cats[index] = cat;

    return cat;
  }
}
