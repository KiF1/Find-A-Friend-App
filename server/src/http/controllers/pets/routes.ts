import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../../http/middlewares/verify-jwt";
import { profile } from "./profile";
import { create } from "./create";
import { edit } from "./edit";
import { fetchNearbyPets } from "./fetch-nearby";
import { filterPetByCaracteristics } from "./filter-by-caracteristics";
import { uploadPet } from "./upload-pet";

export async function petsRoutes(app: FastifyInstance){
  app.post('/pets', { onRequest: [verifyJwt] }, create);
  app.post('/pets/upload', { onRequest: [verifyJwt] }, uploadPet);

  app.put('/pets/:id', { onRequest: [verifyJwt] }, edit)

  app.get('/pets/nearby', fetchNearbyPets)
  app.get('/pets/filtered', filterPetByCaracteristics)
  app.get('/pets/:id', profile)
}