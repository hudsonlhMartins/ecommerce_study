import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.uuid('productId').primary().index()
    table.string('name').notNullable().index()
    table.string('description').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  await knex.schema.createTable('skus', (table) => {
    table.uuid('skuId').primary().index()
    table
      .uuid('productId')
      .notNullable()
      .references('productId')
      .inTable('products')
      .index()
    table.string('name').notNullable().index()
    table.integer('price').notNullable()
    table.integer('listprice').notNullable()
    table.string('color').notNullable()
    table.string('size').notNullable()
    table.boolean('isAvailable').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  await knex.schema.createTable('images', (table) => {
    table.uuid('imageId').primary()
    table.string('name').notNullable()
    table.integer('image_url').notNullable()
    table
      .uuid('skuId')
      .notNullable()
      .references('skuId')
      .inTable('skus')
      .index()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  await knex.schema.createTable('categorys', (table) => {
    table.uuid('categoryId').primary()
    table.string('name').notNullable().index()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  await knex.schema.createTable('products_categorys', (table) => {
    table
      .uuid('categoryId')
      .primary()
      .references('categoryId')
      .inTable('categorys')
      .index()
    table
      .uuid('productId')
      .primary()
      .references('productId')
      .inTable('products')
      .index()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products_categorys')
  await knex.schema.dropTable('categorys')
  await knex.schema.dropTable('images')
  await knex.schema.dropTable('skus')
  await knex.schema.dropTable('products')
}
