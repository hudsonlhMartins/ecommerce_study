import fastify from 'fastify'
import { productsRouter } from './routes/product'
import { categoryRouter } from './routes/category'
import { categoryProductRouter } from './routes/categoryProduct'
import { imageRouter } from './routes/image'

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

app.get('/', async () => {
  return { hello: 'world' }
})

export { app }
