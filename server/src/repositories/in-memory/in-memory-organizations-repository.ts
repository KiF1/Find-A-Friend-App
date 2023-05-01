import { Organization, Prisma } from '@prisma/client';
import { FindManyNearbyParams, OrganizationRepository } from '../interface/organizations-repository';
import { randomUUID } from 'crypto';
import { getDistanceBetweenCoordinates } from '@/utils/get-distance-between-cordinates';

export class InMemoryOrganizations implements OrganizationRepository{
  public items: Organization[] = [];

  async findById(id: string){
    const organization = await this.items.find((organization) => organization.id === id);
    if(!organization){
      return null
    }
    return organization
  }

  async findByEmail(email: string){
      const organization = await this.items.find((item) => item.email === email);
      if(!organization){
        return null
      }
      return organization
  }

  async findManyNearby(params: FindManyNearbyParams){
    const nearbyOrganizations = this.items.filter((item) => {
      const distance = getDistanceBetweenCoordinates({
        latitude: params.latitude, 
        longitude: params.longitude
      }, {
        latitude: item.latitude.toNumber(),
        longitude: item.longitude.toNumber()
      });
      return distance < 10;
    });
  
    const nearbyPets = nearbyOrganizations.flatMap((item) => item.pets);
    return nearbyPets;
  }

  async create(data: Prisma.OrganizationCreateInput){
    const organization = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      description: data.description ?? null,
      phone: data.phone,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
      created_at: new Date()
    }
    this.items.push(organization)
    return organization
  }

}