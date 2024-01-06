import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserOrganizationServiceBase } from "./base/userOrganization.service.base";

@Injectable()
export class UserOrganizationService extends UserOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
