import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('images', (table) => {
    table.string('image_url').notNullable().alter()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('images', (table) => {
    table.integer('image_url').notNullable().alter()
  })
}
