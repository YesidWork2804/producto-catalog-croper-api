import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export const ApiSuccessResponse = (description: string) => {
  return applyDecorators(ApiResponse({ status: 200, description }));
};

export const ApiCreatedResponse = (description: string) => {
  return applyDecorators(ApiResponse({ status: 201, description }));
};

export const ApiNotFoundResponse = () => {
  return applyDecorators(
    ApiResponse({ status: 404, description: 'Recurso no encontrado' }),
  );
};

export const ApiUnauthorizedResponse = () => {
  return applyDecorators(
    ApiResponse({ status: 401, description: 'No autorizado' }),
  );
};
