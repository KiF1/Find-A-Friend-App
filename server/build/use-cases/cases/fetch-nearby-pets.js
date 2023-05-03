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

// src/use-cases/cases/fetch-nearby-pets.ts
var fetch_nearby_pets_exports = {};
__export(fetch_nearby_pets_exports, {
  FetchNearbyPetUseCase: () => FetchNearbyPetUseCase
});
module.exports = __toCommonJS(fetch_nearby_pets_exports);
var FetchNearbyPetUseCase = class {
  constructor(organizationsRepository, petsRepository) {
    this.organizationsRepository = organizationsRepository;
    this.petsRepository = petsRepository;
  }
  async execute({ state, city }) {
    const organizations = await this.organizationsRepository.findManyNearby(state, city);
    const pets = await Promise.all(organizations.map((organization) => {
      return this.petsRepository.findPetInOrganizationById(organization.id);
    }));
    const petsNearby = pets.filter((pet) => pet !== null);
    return { petsNearby };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FetchNearbyPetUseCase
});
