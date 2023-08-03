import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  @Type(() => Number)
  age: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
