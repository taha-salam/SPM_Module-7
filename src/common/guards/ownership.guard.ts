import { Injectable, ForbiddenException, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const requesting_user_id = parseInt(request.headers['x-user-id']);

    if (!requesting_user_id) {
      throw new ForbiddenException('x-user-id header is required');
    }

    request.user_id = requesting_user_id;
    return true;
  }
}