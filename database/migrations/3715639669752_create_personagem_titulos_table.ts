import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personagem_titulos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('personagen_id').unsigned().references('id').inTable('personagens')
      table.integer('titulo_id').unsigned().references('id').inTable('titulos')
      table.date('data_inicio').nullable()
      table.date('data_fim').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}