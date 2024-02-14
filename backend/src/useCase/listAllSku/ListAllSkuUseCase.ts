import { Sku } from '@/entities/Sku'
import { ISkuRepository } from '@/repositories/ISkuRepository'

export class ListAllSkuUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly listAllSkuRepository: ISkuRepository) {}

  async execute(): Promise<Sku[]> {
    return await this.listAllSkuRepository.list()
  }
}
