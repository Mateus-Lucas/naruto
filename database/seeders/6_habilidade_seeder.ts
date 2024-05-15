import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Habilidade from '#models/habilidade'

export default class extends BaseSeeder {
  async run() {
    
    await Habilidade.createMany([

      {nome: " ", descricao:" ", tipo: " "},

    ])

  }
}