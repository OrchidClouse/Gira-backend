import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Task = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.task;
  },
);