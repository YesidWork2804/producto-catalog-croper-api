import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { AuthService } from '../auth/auth.service';
import { ProductsService } from '../products/products.service';

async function seedDatabase() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const authService = app.get(AuthService);
  const productsService = app.get(ProductsService);

  try {
    // Usuario de prueba
    await authService.register({
      email: 'admin@test.com',
      password: 'password123',
      nombre: 'Administrador de Prueba',
    });

    // Productos de prueba
    const productosEjemplo = [
      {
        nombre: 'iPhone 14 Pro',
        descripcion: 'Smartphone Apple con chip A16 Bionic y cámara de 48MP',
        precio: 999.99,
        categoria: 'Electrónicos',
      },
      {
        nombre: 'MacBook Air M2',
        descripcion: 'Laptop ultradelgada con chip M2 de Apple',
        precio: 1199.99,
        categoria: 'Computadoras',
      },
      {
        nombre: 'AirPods Pro',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido',
        precio: 249.99,
        categoria: 'Accesorios',
      },
      {
        nombre: 'Samsung Galaxy S23',
        descripcion: 'Smartphone Android con cámara de 200MP',
        precio: 899.99,
        categoria: 'Electrónicos',
      },
      {
        nombre: 'Dell XPS 13',
        descripcion: 'Laptop ultrabook con procesador Intel i7',
        precio: 1299.99,
        categoria: 'Computadoras',
      },
      {
        nombre: 'Sony WH-1000XM4',
        descripcion: 'Auriculares over-ear con cancelación de ruido',
        precio: 349.99,
        categoria: 'Accesorios',
      },
      {
        nombre: 'iPad Pro 12.9"',
        descripcion: 'Tablet profesional con chip M2 y pantalla Liquid Retina',
        precio: 1099.99,
        categoria: 'Tablets',
      },
      {
        nombre: 'Nintendo Switch OLED',
        descripcion: 'Consola de videojuegos híbrida con pantalla OLED',
        precio: 349.99,
        categoria: 'Gaming',
      },
      {
        nombre: 'Libro "Clean Code"',
        descripcion: 'Guía para escribir código limpio y mantenible',
        precio: 29.99,
        categoria: 'Libros',
      },
      {
        nombre: 'Teclado mecánico RGB',
        descripcion: 'Teclado gaming con switches Cherry MX e iluminación RGB',
        precio: 129.99,
        categoria: 'Accesorios',
      },
    ];

    for (const producto of productosEjemplo) {
      await productsService.create(producto);
    }
  } catch (error) {
    console.error('❌ Error durante el seed:', error.message);
  } finally {
    await app.close();
  }
}

seedDatabase();
