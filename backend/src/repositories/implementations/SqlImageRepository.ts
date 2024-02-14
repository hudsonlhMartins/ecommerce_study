import { Image } from '@/entities/Image'
import { IImageRepository } from '../IImageRepository'
import { knex } from '@/database'
import { UUID } from 'node:crypto'

export class SqlImageRepository implements IImageRepository {
  async save(image: Image): Promise<void> {
    await knex('images').insert(image)
  }

  async findBySkuId(skuId: UUID): Promise<Image | undefined> {
    const image = await knex('images')
      .where({
        skuId,
      })
      .first()

    return image
  }

  async findById(imageId: UUID): Promise<Image | undefined> {
    const image = await knex('images')
      .where({
        imageId,
      })
      .first()

    return image
  }

  async findByName(name: string): Promise<Image | undefined> {
    const image = await knex('images')
      .whereILike({
        name,
      })
      .first()

    return image
  }

  async list(): Promise<Image[]> {
    const images = await knex('images')
    return images
  }
}
