import { Product } from '@/entities/Product'
import { Sku } from '@/entities/Sku'
import { UUID } from 'node:crypto'

export interface ProductsJoinSku extends Product {
  skus: Sku[]
}

export interface IProductsRepository {
  save(product: Product): Promise<void>
  findById(productId: UUID): Promise<ProductsJoinSku | undefined>
  findByName(name: string): Promise<ProductsJoinSku | undefined>
  findByCatedoryId(categoryId: UUID): Promise<ProductsJoinSku[]>
  list(): Promise<ProductsJoinSku[]>
}
