import { UUID, randomUUID } from 'node:crypto'

export class ProductInCategory {
  productId: UUID = randomUUID()
  categoryId: UUID = randomUUID()

  constructor(props: ProductInCategory) {
    Object.assign(this, props)
  }
}
