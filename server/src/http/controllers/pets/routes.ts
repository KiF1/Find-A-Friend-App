import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../../http/middlewares/verify-jwt";
import { profile } from "./profile";
import { create } from "./create";
import { edit } from "./edit";
import { fetchNearbyPets } from "./fetch-nearby";
import { filterPetByCaracteristics } from "./filter-by-caracteristics";
import multer from "fastify-multer";
import upload from "../../../config/upload";

export async function petsRoutes(app: FastifyInstance){
  const uploadPet = multer(upload);


  app.post('/pets', { onRequest: [verifyJwt, uploadPet.array("photos")] }, create);

  app.put('/pets/:id', { onRequest: [verifyJwt] }, edit)

  app.get('/pets/nearby', fetchNearbyPets)
  app.get('/pets/filtered', filterPetByCaracteristics)
  app.get('/pets/:id', profile)
}