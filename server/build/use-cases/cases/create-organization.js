"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/use-cases/cases/create-organization.ts
var create_organization_exports = {};
__export(create_organization_exports, {
  CreateOrganizationUseCase: () => CreateOrganizationUseCase
});
module.exports = __toCommonJS(create_organization_exports);
var import_bcryptjs = require("bcryptjs");

// src/use-cases/errors/organization-already-exists-error.ts
var OrganizationAlreadyExistsError = class extends Error {
  constructor() {
    super("Email Already exists");
  }
};

// src/use-cases/cases/create-organization.ts
var CreateOrganizationUseCase = class {
  constructor(organizationRepository) {
    this.organizationRepository = organizationRepository;
  }
  async execute({ name, email, password, description, phone, address, cep, city, state }) {
    const password_hash = await (0, import_bcryptjs.hash)(password, 6);
    const userWithSomeEmail = await this.organizationRepository.findByEmail(email);
    if (userWithSomeEmail) {
      throw new OrganizationAlreadyExistsError();
    }
    const organization = await this.organizationRepository.create({ name, email, password_hash, description, phone, address, cep, city, state });
    return { organization };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateOrganizationUseCase
});
