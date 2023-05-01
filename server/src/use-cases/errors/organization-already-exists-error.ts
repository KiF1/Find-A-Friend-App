export class OrganizationAlreadyExistsError extends Error {
  constructor(){
    super('Email Already exists')
  }
}