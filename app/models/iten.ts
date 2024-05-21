import { DateTime } from 'luxon'
import { BaseModel, column,  manyToMany } from '@adonisjs/lucid/orm'
import Personagen from './personagen.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Iten extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare tipo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(()=>Personagen)
  declare personagens: ManyToMany<typeof Personagen>
}