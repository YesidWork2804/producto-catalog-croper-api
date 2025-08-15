import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Laptop Dell XPS 13',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @ApiProperty({
    description: 'Descripción detallada del producto',
    example: 'Laptop ultradelgada con procesador Intel i7',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  descripcion?: string;

  @ApiProperty({
    description: 'Precio del producto en USD',
    example: 999.99,
    minimum: 0.01,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01, { message: 'El precio debe ser mayor que 0' })
  precio: number;

  @ApiProperty({
    description: 'Categoría del producto',
    example: 'Electrónicos',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  categoria: string;
}
