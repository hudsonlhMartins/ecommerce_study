import { UUID, randomUUID } from 'node:crypto'

export class Image {
  readonly name: string = ''
  readonly image_url: string = ''
  readonly skuId: UUID = randomUUID()
  readonly imageId?: UUID = randomUUID()
  constructor(props: Image) {
    Object.assign(this, props)

    if (!props.imageId) {
      this.imageId = randomUUID()
    }
  }
}
