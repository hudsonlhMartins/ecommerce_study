import { Image } from '@/entities/Image'
import { Product } from '@/entities/Product'
import { Sku } from '@/entities/Sku'
import { UUID } from 'node:crypto'

interface SkuParams extends Sku {
  images: Image[]
}
export interface ProductsJoinSku extends Product {
  skus: SkuParams[]
  categories?: string[]
}

export interface IProductsRepository {
  save(product: Product): Promise<number[]>

  findById(productId: UUID): Promise<ProductsJoinSku | undefined>
  findByName(name: string): Promise<ProductsJoinSku | undefined>
  listProductsByCategoryId(categoryId: UUID): Promise<ProductsJoinSku[]>
  list(): Promise<ProductsJoinSku[]>
}
