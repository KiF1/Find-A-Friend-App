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

// src/repositories/in-memory/in-memory-pets-repository.ts
var in_memory_pets_repository_exports = {};
__export(in_memory_pets_repository_exports, {
  InMemoryPetsRepository: () => InMemoryPetsRepository
});
module.exports = __toCommonJS(in_memory_pets_repository_exports);
var import_crypto = require("crypto");
var InMemoryPetsRepository = class {
  constructor() {
    this.items = [];
  }
  async create(data) {
    const pet = {
      id: data.id ?? (0, import_crypto.randomUUID)(),
      name: data.name,
      description: data.description ?? null,
      age: data.age,
      size: data.size,
      energy_level: data.energy_level,
      dependency_level: data.dependency_level,
      environment: data.environment,
      requirements: typeof data.requirements === "string" ? [data.requirements] : [],
      photos: data.photos,
      organization_id: data.organization_id,
      created_at: /* @__PURE__ */ new Date()
    };
    this.items.push(pet);
    return pet;
  }
  async edit(id, data) {
    const pet = await this.items.findIndex((item) => item.id === id);
    const updatedPet = { ...this.items[pet], ...data, requirements: typeof data.requirements === "string" ? [data.requirements] : [], created_at: /* @__PURE__ */ new Date() };
    this.items.splice(pet, 1, updatedPet);
    return updatedPet;
  }
  async findById(id) {
    const pet = await this.items.find((item) => item.id === id);
    if (!pet) {
      return null;
    }
    return pet;
  }
  async findPetInOrganizationById(orgId) {
    const pet = this.items.find((item) => item.organization_id === orgId);
    if (!pet) {
      return null;
    }
    return pet;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryPetsRepository
});
