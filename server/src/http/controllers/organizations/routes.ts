import { FastifyInstance } from "fastify";
import { verifyJwt } from "../../middlewares/verify-jwt";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { refresh } from "./refresh";
import { profile } from "./profile";
import { uploadLogo } from "./upload-logo";

export async function organizationsRoutes(app: FastifyInstance){
  app.post('/organizations', register);
  app.post('/sessions', authenticate)
  app.post('/organizations/upload', { onRequest: [verifyJwt] }, uploadLogo);

  app.patch('/token/refresh', refresh)

  app.get('/organizations/:id', { onRequest: [verifyJwt] }, profile)
}