/* eslint-disable @typescript-eslint/no-unused-vars */
import { UUID } from 'node:crypto'
import { IProductsRepository, ProductsJoinSku } from '../IProductsRepository'
import { Product } from '@/entities/Product'
import { knex } from '@/database'
import { SqlProductInCategoryRepository } from './SqlProductInCategoryRepository'

export class SqlProductRepository implements IProductsRepository {
  async save(product: Product) {
    const data = await knex('products').returning('*').insert(product)
    return data
  }

  async findById(productId: UUID): Promise<ProductsJoinSku | undefined> {
    const product = await knex('products').where('productId', productId).first()
    if (!product) return undefined
    const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
    const categories =
      await sqlProductInCategoryRepository.findCategorytByProductId(
        product.productId as UUID,
      )
    const skus = await knex('skus').where('productId', productId)

    const _skusWithImage = skus.map(async (sku) => {
      const images = await knex('images').where('skuId', sku.skuId)
      const _image = images.map((el) => {
        const { imageUrl, ...rest } = el
        return { ...rest, image_url: el.imageUrl }
      })
      return { ...sku, images: _image }
    })

    const skusWithImage = await Promise.all(_skusWithImage)

    return {
      ...product,
      skus: skusWithImage,
      categories: categories?.map((el) => el.name),
    }
  }

  async findByName(name: string): Promise<ProductsJoinSku | undefined> {
    const product = await knex('products').whereLike('name', name).first()
    if (!product) return undefined
    const skus = await knex('skus').where('productId', product.productId)
    const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
    const categories =
      await sqlProductInCategoryRepository.findCategorytByProductId(
        product.productId as UUID,
      )

    const _skusWithImage = skus.map(async (sku) => {
      const images = await knex('images').where('skuId', sku.skuId)
      const _image = images.map((el) => {
        const { imageUrl, ...rest } = el
        return { ...rest, image_url: el.imageUrl }
      })
      return { ...sku, images: _image }
    })

    const skusWithImage = await Promise.all(_skusWithImage)

    if (!categories) {
      return { ...product, skus: skusWithImage }
    }
    return {
      ...product,
      skus: skusWithImage,
      categories: categories.map((el) => el.name),
    }
  }

  async list(): Promise<ProductsJoinSku[]> {
    const products = await knex('products')
    const productjoinSku: ProductsJoinSku[] = []
    const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
    for (const product of products) {
      const categories =
        await sqlProductInCategoryRepository.findCategorytByProductId(
          product.productId as UUID,
        )
      const skus = await knex('skus').where('productId', product.productId)

      const _skusWithImage = skus.map(async (sku) => {
        const images = await knex('images').where('skuId', sku.skuId)
        const _image = images.map((el) => {
          const { imageUrl, ...rest } = el
          return { ...rest, image_url: el.imageUrl }
        })
        return { ...sku, images: _image }
      })

      productjoinSku.push({
        ...product,
        skus: await Promise.all(_skusWithImage),
        categories: categories?.map((el) => el.name),
      })
    }
    return productjoinSku
  }
}
