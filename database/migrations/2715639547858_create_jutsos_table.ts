import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jutsos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable()
      table.string('descricao').notNullable()
      table.string('elemento', 50).notNullable()
      table.integer('tipo_id').unsigned().references('id').inTable('tipos')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}