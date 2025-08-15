import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Catálogo de Productos funcionando correctamente!';
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Catálogo de Productos API',
      version: '1.0.0',
    };
  }
}
