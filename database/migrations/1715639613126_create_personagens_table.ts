import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personagens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable()
      table.string('idade').notNullable()
      table.integer('aldeia_id').unsigned().references('id').inTable('aldeias')
      table.string('rank_num', 50).notNullable()
      table.string('missao_atual', 255).notNullable()
      table.string('status', 50).notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}