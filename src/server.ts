import fastify from 'fastify'
import { env } from './env/index.ts'
import { transactionsRoutes } from './routes/transactions.ts'
import cookies from '@fastify/cookie'

const app = fastify()

app.register(cookies)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
