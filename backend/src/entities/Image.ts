import { UUID, randomUUID } from 'node:crypto'

export class Image {
  constructor(
    readonly name: string,
    readonly imageUrl: string,
    readonly skuId: UUID,
    readonly imageId?: UUID,
  ) {
    this.imageUrl = imageUrl
    this.name = name
    this.skuId = skuId

    if (!imageId) {
      this.imageId = randomUUID()
    }
  }
}
