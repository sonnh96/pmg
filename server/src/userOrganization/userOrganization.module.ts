import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserOrganizationModuleBase } from "./base/userOrganization.module.base";
import { UserOrganizationService } from "./userOrganization.service";
import { UserOrganizationController } from "./userOrganization.controller";

@Module({
  imports: [UserOrganizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserOrganizationController],
  providers: [UserOrganizationService],
  exports: [UserOrganizationService],
})
export class UserOrganizationModule {}
