import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Laptop Dell XPS 13 Pro',
    required: false,
  })
  nombre?: string;

  @ApiProperty({
    description: 'Descripción del producto',
    required: false,
  })
  descripcion?: string;

  @ApiProperty({
    description: 'Precio del producto',
    required: false,
  })
  precio?: number;

  @ApiProperty({
    description: 'Categoría del producto',
    required: false,
  })
  categoria?: string;
}
