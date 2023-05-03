"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/use-cases/cases/create-pet.ts
var create_pet_exports = {};
__export(create_pet_exports, {
  CreatePetUseCase: () => CreatePetUseCase
});
module.exports = __toCommonJS(create_pet_exports);
var import_node_path = __toESM(require("path"));
var import_node_crypto = require("crypto");
var import_node_fs = __toESM(require("fs"));

// src/use-cases/errors/organization-not-exists.ts
var OrganizationNotExists = class extends Error {
  constructor() {
    super("Organization Not Exists");
  }
};

// src/use-cases/cases/create-pet.ts
var CreatePetUseCase = class {
  constructor(petRepository, organizationRepository) {
    this.petRepository = petRepository;
    this.organizationRepository = organizationRepository;
  }
  async execute({ name, age, dependency_level, description, energy_level, environment, organization_id, photos, requirements, size }) {
    const organization = await this.organizationRepository.findById(organization_id);
    if (!organization) {
      throw new OrganizationNotExists();
    }
    const idPet = (0, import_node_crypto.randomUUID)();
    const photoUrls = [];
    for (const photo of photos) {
      const photoId = (0, import_node_crypto.randomUUID)();
      const photoPath = import_node_path.default.join(__dirname, "..", "..", "tmp", photoId);
      import_node_fs.default.writeFileSync(photoPath, photo);
      const photos2 = { id: photoId, url: `http://localhost:4000/pets/${photoId}`, pet_id: idPet };
      photoUrls.push(photos2);
    }
    const petImagesUnchecked = {
      createMany: {
        data: photoUrls.map((photoUrl) => ({
          id: photoUrl.id,
          url: photoUrl.url
        }))
      }
    };
    const pet = await this.petRepository.create({ id: idPet, name, age, dependency_level, description, energy_level, environment, organization_id, photos: petImagesUnchecked, requirements, size });
    return { pet };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreatePetUseCase
});
