import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @ApiProperty({ description: 'Nombre del producto' })
  @Prop({ required: true, trim: true })
  nombre: string;

  @ApiProperty({ description: 'Descripción del producto', required: false })
  @Prop({ trim: true })
  descripcion?: string;

  @ApiProperty({ description: 'Precio del producto', minimum: 0.01 })
  @Prop({ required: true, min: 0.01 })
  precio: number;

  @ApiProperty({ description: 'Categoría del producto' })
  @Prop({ trim: true })
  categoria: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// Índices para optimizar búsquedas
ProductSchema.index({ nombre: 1 });
ProductSchema.index({ categoria: 1 });
ProductSchema.index({ precio: 1 });
