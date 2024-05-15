import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PersonagemTitulo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare personagemId: number

  @column()
  declare tituloId: number

  @column()
  declare data_inicio: Date

  @column()
  declare data_fim: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}