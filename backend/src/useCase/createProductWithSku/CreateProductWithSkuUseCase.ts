import { ICategoryRepository } from '@/repositories/ICategoryRepository'
import { IImageRepository } from '@/repositories/IImageRepository'
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { ISkuRepository } from '@/repositories/ISkuRepository'
import { ICreateProductWithSkuUseCaseParams } from './typings'
import { UUID } from 'crypto'
import { Product } from '@/entities/Product'
import { Sku } from '@/entities/Sku'
import { Image } from '@/entities/Image'
import { ErrorNotFound } from '@/errors/error-not-found'

export class CreateProductWithSkuUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private categoryRepository: ICategoryRepository,
    private imageRepository: IImageRepository,
    private productsRepository: IProductsRepository,
    private skuRepository: ISkuRepository,
  ) {}

  async execute(params: ICreateProductWithSkuUseCaseParams) {
    const { skus, categoryId, ...product } = params
    const findCategory = await this.categoryRepository.findById(categoryId)
    if (!findCategory) {
      throw new ErrorNotFound('Category')
    }
    try {
      const productData = new Product(product)
      await this.productsRepository.save(productData)

      for (const skuItem of skus) {
        const { images, ...parmsSku } = skuItem
        const sku = new Sku({
          ...parmsSku,
          productId: productData.productId as UUID,
        })

        await this.skuRepository.save(sku)

        for (const image of images) {
          const _imageData = new Image({ ...image, skuId: sku.skuId as UUID })

          await this.imageRepository.save({
            ..._imageData,
          })
        }
      }
    } catch (err) {
      console.log(err)

      throw new Error('Error to create product with sku')
    }
  }
}
