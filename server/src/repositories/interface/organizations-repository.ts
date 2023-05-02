import { Organization, Pet, Prisma } from "@prisma/client";

export interface OrganizationRepository {
  findById(id: string): Promise<Organization | null>
  findByEmail(email: string): Promise<Organization | null>
  findManyNearby(state: string, city: string): Promise<Organization[]>
  create(data: Prisma.OrganizationCreateInput): Promise<Organization>
}