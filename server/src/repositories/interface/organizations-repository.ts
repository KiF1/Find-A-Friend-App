import { Organization, Prisma } from "@prisma/client";

export interface OrganizationRepository {
  findById(id: string): Promise<Organization | null>
  findByEmail(email: string): Promise<Organization | null>
  findManyNearby(state: string, city: string): Promise<Organization[] | null>
  edit(id: string, data: Prisma.OrganizationUncheckedCreateInput): Promise<Organization>
  create(data: Prisma.OrganizationCreateInput): Promise<Organization>
}