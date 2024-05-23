import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Aldeia from './aldeia.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Jutso from './jutso.js'
import Missoe from './missoe.js'
import Iten from './iten.js'
import Titulo from './titulo.js'

export default class Personagen extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare idade: string

  @column()
  declare aldeiaId: number

  @column()
  declare tituloId: number

  @column()
  declare rankNum: string

  @column()
  declare missao_atual: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Aldeia)
  declare aldeia: BelongsTo<typeof Aldeia>

  @belongsTo(()=>Titulo)
  declare titulo: BelongsTo<typeof Titulo>

  @manyToMany(()=>Jutso, {
    pivotTable: 'personagem_jutsos'
  })
  declare jutsos: ManyToMany<typeof Jutso>

  @manyToMany(()=>Missoe, {
    pivotTable: 'personagem_missoes'
  })
  declare missoes: ManyToMany<typeof Missoe>

  @manyToMany(()=>Iten, {
    pivotTable: 'personagem_itens'
  })
  declare itens: ManyToMany<typeof Iten>
}