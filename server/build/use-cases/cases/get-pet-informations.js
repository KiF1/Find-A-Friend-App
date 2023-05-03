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

// src/use-cases/cases/get-pet-informations.ts
var get_pet_informations_exports = {};
__export(get_pet_informations_exports, {
  GetPetInformationsUseCase: () => GetPetInformationsUseCase
});
module.exports = __toCommonJS(get_pet_informations_exports);

// src/use-cases/errors/invalid-credentials-error.ts
var InvalidCredentialsError = class extends Error {
  constructor() {
    super("Invalid Credentials");
  }
};

// src/use-cases/cases/get-pet-informations.ts
var GetPetInformationsUseCase = class {
  constructor(petsRepository) {
    this.petsRepository = petsRepository;
  }
  async execute({ id }) {
    const pet = await this.petsRepository.findById(id);
    if (!pet) {
      throw new InvalidCredentialsError();
    }
    return { pet };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetPetInformationsUseCase
});
