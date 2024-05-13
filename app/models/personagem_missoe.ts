import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PersonagemMissoe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare personagemId: number

  @column()
  declare missaoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}