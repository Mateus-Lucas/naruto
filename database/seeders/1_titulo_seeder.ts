import Titulo from '#models/titulo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Titulo.createMany([

      {nome: " ", descricao:" "},

    ])

  }
}