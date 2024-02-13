import { randomUUID, UUID } from 'node:crypto'

export class Category {
  private readonly categoryId?: UUID = randomUUID()
  name: string = ''

  constructor(props: Omit<Category, 'categoryId'>, categoryId?: UUID) {
    Object.assign(this, props)

    if (!categoryId) {
      this.categoryId = randomUUID()
    }
  }
}
