import { UUID, randomUUID } from 'node:crypto'

export class Product {
  readonly productId?: UUID
  name: string = ''
  description: string = ''

  constructor(props: Omit<Product, 'productId'>, productId?: UUID) {
    Object.assign(this, props)

    if (!productId) {
      this.productId = randomUUID()
    }
  }
}
