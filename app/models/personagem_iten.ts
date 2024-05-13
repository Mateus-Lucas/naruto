import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PersonagemIten extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare personagemId: number

  @column()
  declare iitemId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}