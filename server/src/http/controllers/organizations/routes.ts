import { FastifyInstance } from "fastify";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { refresh } from "./refresh";
import { profile } from "./profile";

export async function organizationsRoutes(app: FastifyInstance){
  app.post('/organizations', register);
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  app.get('/organization', { onRequest: [verifyJwt] }, profile)
}