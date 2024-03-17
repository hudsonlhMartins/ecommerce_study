import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('products_categorys', (table) => {
    table.dropPrimary()
    table.primary(['categoryId', 'productId'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products_categorys')
}
