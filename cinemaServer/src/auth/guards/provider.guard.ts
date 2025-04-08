import { Request } from "express";
import { ProviderService } from "../provider/provider.service";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

@Injectable()
export class AuthProviderGuard implements CanActivate {
  public constructor(private readonly providerService: ProviderService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request;

    const provider = request.params.provider;

    const providerInstance = this.providerService.findByService(provider);

    if (!providerInstance)
      throw new NotFoundException(
        `Провайдер "${provider}" не найден. Пожалуйста, проверьте правильность введённых данных.`
      );

    return true;
  }
}
