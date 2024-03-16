import fastify from 'fastify'
import { productsRouter } from './routes/product'
import { categoryRouter } from './routes/category'
import { categoryProductRouter } from './routes/categoryProduct'
import { imageRouter } from './routes/image'
import { skuRouter } from './routes/skus'
import { env } from 'process'
import { ZodError } from 'zod'

const app = fastify()

app.register(productsRouter, {
  prefix: 'products',
})
app.register(categoryRouter, {
  prefix: 'category',
})
app.register(categoryProductRouter, {
  prefix: 'category-product',
})
app.register(imageRouter, {
  prefix: 'image',
})
app.register(skuRouter, {
  prefix: 'sku',
})

app.get('/', async () => {
  return { hello: 'world' }
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to an external tool like datadog/NewRelic/Sentry
    /*
        isso e para obervabilidade, para saber o que esta acontecendo com a aplicacao
    */
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

export { app }
