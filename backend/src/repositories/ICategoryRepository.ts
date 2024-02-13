import { Category } from '@/entities/Category'
import { UUID } from 'node:crypto'

export interface ICategoryRepository {
  save(category: Category): Promise<void>
  findById(categoryId: UUID): Promise<Category | undefined>
  findByName(name: string): Promise<Category | undefined>
  list(): Promise<Category[]>
}
