import { UUID } from 'node:crypto'
import { knex } from '@/database'
import { ICategoryRepository } from '../ICategoryRepository'
import { Category } from '@/entities/Category'

export class SqlCategoryRepository implements ICategoryRepository {
  async save(category: Category): Promise<void> {
    return await knex('categorys').insert(category)
  }

  async findById(categoryId: UUID): Promise<Category | undefined> {
    return await knex('categorys').where('categoryId', categoryId).first()
  }

  async findByName(name: string): Promise<Category | undefined> {
    return await knex('categorys').where('name', name).first()
  }

  async list(): Promise<Category[]> {
    return await knex('categorys')
  }
}
