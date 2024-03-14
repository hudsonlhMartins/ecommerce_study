import { Product } from '@/entities/Product'
import { UUID } from 'crypto'

export interface IImageParams {
  name: string
  image_url: string
}
export interface iSkuParams {
  images: IImageParams[]
  name: string
  price: number
  listPrice?: number
  color: string
  size: string
  isAvailable: boolean
}

export interface ICreateProductWithSkuUseCaseParams extends Product {
  skus: iSkuParams[]
  categoryId: UUID
}
