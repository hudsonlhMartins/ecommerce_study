import { Product } from '@/entities/Product'
import { Sku } from '@/entities/Sku'
import { UUID } from 'node:crypto'

export interface ProductsJoinSku extends Product {
  skus: Sku[]
  categories?: string[]
}

export interface IProductsRepository {
  save(product: Product): Promise<void>

  findById(productId: UUID): Promise<ProductsJoinSku | undefined>
  findByName(name: string): Promise<ProductsJoinSku | undefined>

  list(): Promise<ProductsJoinSku[]>
}
