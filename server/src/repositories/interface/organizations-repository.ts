import { Organization, Pet, Prisma } from "@prisma/client";

export interface FindManyNearbyParams{
  latitude: number;
  longitude: number;
}

export interface OrganizationRepository {
  findById(id: string): Promise<Organization | null>
  findByEmail(email: string): Promise<Organization | null>
  findManyNearby(params: FindManyNearbyParams): Promise<Pet[]>
  create(data: Prisma.OrganizationCreateInput): Promise<Organization>
}