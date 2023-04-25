import fastify from 'fastify'
import { knex } from './infra/database'

const app = fastify()

app.get('/', async () => {
  const test = await knex('sqlite_schema').select('*')
  return test
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Http server running!'))
