import fastify from 'fastify'
import { createProductController } from './useCase/createProduct'
import { findProductByIdController } from './useCase/findProductbyId'
import { listProductsController } from './useCase/listProducts'
import { createCategoryController } from './useCase/createCategory'
import { listCategoryController } from './useCase/listCategory'
import { addProductInCategoryController } from './useCase/addCategoryInProduct'
import { listAllProductInCategoryController } from './useCase/listAllProductInCategory'
import { findProductByCategoryIdController } from './useCase/findProductByCategoryId/indext'
import { findCategoryByProductIdController } from './useCase/findCategoryByProductId/intex'

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
  '/category/create',
  createCategoryController.handle.bind(createCategoryController),
)
app.get(
  '/category/',
  listCategoryController.handle.bind(listCategoryController),
)

app.post(
  '/category-product/add-category',
  addProductInCategoryController.handle.bind(addProductInCategoryController),
)
app.get(
  '/category-product/',
  listAllProductInCategoryController.handle.bind(
    listAllProductInCategoryController,
  ),
)
app.get(
  '/category-product/:categoryId',
  findProductByCategoryIdController.handle.bind(
    findProductByCategoryIdController,
  ),
)
app.get(
  '/category-product/category/:productId',
  findCategoryByProductIdController.handle.bind(
    findCategoryByProductIdController,
  ),
)

app.get('/', async () => {
  return { hello: 'world' }
})

export { app }
