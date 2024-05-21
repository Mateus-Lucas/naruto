import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Personagen from './personagen.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Aldeia extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare localizacao: string

  @column()
  declare pais: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Personagen)
  declare personagens: HasMany<typeof Personagen>
}