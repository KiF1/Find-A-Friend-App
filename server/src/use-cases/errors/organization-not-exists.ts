export class OrganizationNotExists extends Error {
  constructor(){
    super('Organization Not Exists')
  }
}