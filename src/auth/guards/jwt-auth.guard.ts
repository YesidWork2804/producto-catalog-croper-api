import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    console.log('🛡️ JwtAuthGuard - Verificando autorización...');
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    console.log('🛡️ JwtAuthGuard - handleRequest');
    console.log('Error:', err);
    console.log('User:', user);
    console.log('Info:', info);

    if (err || !user) {
      console.log('❌ JwtAuthGuard - Autorización fallida');
      throw err || new Error('Unauthorized');
    }

    console.log('✅ JwtAuthGuard - Usuario autorizado');
    return user;
  }
}
