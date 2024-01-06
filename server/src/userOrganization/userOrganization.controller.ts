import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserOrganizationService } from "./userOrganization.service";
import { UserOrganizationControllerBase } from "./base/userOrganization.controller.base";

@swagger.ApiTags("userOrganizations")
@common.Controller("userOrganizations")
export class UserOrganizationController extends UserOrganizationControllerBase {
  constructor(
    protected readonly service: UserOrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
