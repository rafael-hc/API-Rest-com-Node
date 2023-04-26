import { FastifyInstance } from 'fastify'
import { knex } from '../infra/database'
import { randomUUID } from 'crypto'
import { z } from 'zod'

const createTransactionBodySchema = z.object({
  title: z.string(),
  amount: z.number(),
  type: z.enum(['credit', 'debit']),
})

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const body = createTransactionBodySchema.safeParse(request.body)

    if (body.success === false) {
      return reply.status(400).send(body.error.format())
    }

    const { title, amount, type } = body.data
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return reply.status(201).send()
  })
}
