import { FastifyReply, FastifyRequest } from 'fastify'
import { randomUUID } from 'node:crypto'
import { createWriteStream } from 'node:fs'
import { extname, resolve } from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

const pump = promisify(pipeline);

export async function uploadPet(request: FastifyRequest, reply: FastifyReply) {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880 // 5 Mb
      },
    })
    if(!upload){
      return reply.status(400).send()
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)
    if(!isValidFileFormat){
      return reply.status(400).send()
    }

    const fileId = randomUUID();
    const extension = extname(upload.filename);
    const fileName = fileId.concat(extension);

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/pets/', fileName)
    )
    await pump(upload.file, writeStream)
    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/pets/${fileName}`, fullUrl).toString()
    
    return { fileUrl }
}