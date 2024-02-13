import { UUID } from 'node:crypto'

export class Product {
  readonly productId: UUID
  name: string
  description: string

  constructor({ productId, name, description }: Product) {
    this.productId = productId
    this.name = name
    this.description = description
  }
}
