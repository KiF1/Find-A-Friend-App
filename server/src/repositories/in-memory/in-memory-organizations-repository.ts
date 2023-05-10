import { Organization, Prisma } from '@prisma/client';
import { OrganizationRepository } from '../interface/organizations-repository';
import { randomUUID } from 'crypto';

export class InMemoryOrganizationsRepository implements OrganizationRepository{
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

  async findManyNearby(state: string, city: string){
    const organizations = await this.items.filter((item) => item.state === state && item.city === city);
    if(!organizations){
      return null
    }
    return organizations
  }

  async create(data: Prisma.OrganizationCreateInput){
    const organization = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      description: data.description ?? null,
      phone: data.phone,
      city: data.city,
      state: data.state,
      address: data.address,
      cep: data.cep,
      created_at: new Date()
    }
    this.items.push(organization)
    return organization
  }

}