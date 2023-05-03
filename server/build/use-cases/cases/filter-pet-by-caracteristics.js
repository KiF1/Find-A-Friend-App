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

// src/use-cases/cases/filter-pet-by-caracteristics.ts
var filter_pet_by_caracteristics_exports = {};
__export(filter_pet_by_caracteristics_exports, {
  FilterPetByCaracteristicUseCase: () => FilterPetByCaracteristicUseCase
});
module.exports = __toCommonJS(filter_pet_by_caracteristics_exports);
var FilterPetByCaracteristicUseCase = class {
  constructor(organizationsRepository, petsRepository) {
    this.organizationsRepository = organizationsRepository;
    this.petsRepository = petsRepository;
  }
  async execute({ state, city, params, page }) {
    const organizationsNearby = await this.organizationsRepository.findManyNearby(state, city);
    const petsInOrganization = await Promise.all(organizationsNearby.map((organization) => {
      return this.petsRepository.findPetInOrganizationById(organization.id);
    }));
    const filteredPetsNearby = petsInOrganization.filter((pet) => pet !== null);
    const pets = await filteredPetsNearby.filter((item) => {
      for (const key in params) {
        if (item[key] !== params[key]) {
          return false;
        }
      }
      return true;
    }).slice((page - 1) * 20, page * 20);
    return { pets };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FilterPetByCaracteristicUseCase
});
