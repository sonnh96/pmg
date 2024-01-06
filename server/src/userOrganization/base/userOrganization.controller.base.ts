/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserOrganizationService } from "../userOrganization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserOrganizationCreateInput } from "./UserOrganizationCreateInput";
import { UserOrganization } from "./UserOrganization";
import { UserOrganizationFindManyArgs } from "./UserOrganizationFindManyArgs";
import { UserOrganizationWhereUniqueInput } from "./UserOrganizationWhereUniqueInput";
import { UserOrganizationUpdateInput } from "./UserOrganizationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserOrganizationControllerBase {
  constructor(
    protected readonly service: UserOrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserOrganization })
  @nestAccessControl.UseRoles({
    resource: "UserOrganization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserOrganization(
    @common.Body() data: UserOrganizationCreateInput
  ): Promise<UserOrganization> {
    return await this.service.createUserOrganization({
      data: {
        ...data,

        organizationId: data.organizationId
          ? {
              connect: data.organizationId,
            }
          : undefined,

        userId: data.userId
          ? {
              connect: data.userId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserOrganization] })
  @ApiNestedQuery(UserOrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserOrganization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userOrganizations(
    @common.Req() request: Request
  ): Promise<UserOrganization[]> {
    const args = plainToClass(UserOrganizationFindManyArgs, request.query);
    return this.service.userOrganizations({
      ...args,
      select: {
        createdAt: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserOrganization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserOrganization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userOrganization(
    @common.Param() params: UserOrganizationWhereUniqueInput
  ): Promise<UserOrganization | null> {
    const result = await this.service.userOrganization({
      where: params,
      select: {
        createdAt: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserOrganization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserOrganization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserOrganization(
    @common.Param() params: UserOrganizationWhereUniqueInput,
    @common.Body() data: UserOrganizationUpdateInput
  ): Promise<UserOrganization | null> {
    try {
      return await this.service.updateUserOrganization({
        where: params,
        data: {
          ...data,

          organizationId: data.organizationId
            ? {
                connect: data.organizationId,
              }
            : undefined,

          userId: data.userId
            ? {
                connect: data.userId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          organizationId: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserOrganization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserOrganization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserOrganization(
    @common.Param() params: UserOrganizationWhereUniqueInput
  ): Promise<UserOrganization | null> {
    try {
      return await this.service.deleteUserOrganization({
        where: params,
        select: {
          createdAt: true,
          id: true,

          organizationId: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
