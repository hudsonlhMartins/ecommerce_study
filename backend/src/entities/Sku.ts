import { randomUUID, UUID } from 'node:crypto'

export class Sku {
  readonly skuId?: UUID = randomUUID()
  name: string = ''
  productId: string = ''
  price = 0
  listPrice = 0
  color: string = ''
  size: string = ''
  isAvailable = true

  constructor(props: Omit<Sku, 'skuId'>, skuId?: UUID) {
    Object.assign(this, props)

    if (!skuId) {
      this.skuId = randomUUID()
    }
  }
}
