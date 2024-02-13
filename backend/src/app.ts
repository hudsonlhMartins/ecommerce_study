import fastify from 'fastify'
import { createProductController } from './useCase/createProduct'
import { findProductByIdController } from './useCase/findProductbyId'
import { listProductsController } from './useCase/listProducts'
import { createCategoryController } from './useCase/createCategory'
import { listCategoryController } from './useCase/listCategory'
import { addProductInCategoryController } from './useCase/addCategoryInProduct'

const app = fastify()

app.post(
  '/products/create',
  createProductController.handle.bind(createProductController),
)
app.get(
  '/products/:productId',
  findProductByIdController.handle.bind(findProductByIdController),
)
app.get(
  '/products/',
  listProductsController.handle.bind(listProductsController),
)
app.post(
  '/products/add-category',
  addProductInCategoryController.handle.bind(addProductInCategoryController),
)

app.post(
  '/category/create',
  createCategoryController.handle.bind(createCategoryController),
)
app.get(
  '/category/',
  listCategoryController.handle.bind(listCategoryController),
)

app.get('/', async () => {
  return { hello: 'world' }
})

export { app }
