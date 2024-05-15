import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Personagen from '#models/personagen'

export default class extends BaseSeeder {
  async run() {
    
    await Personagen.createMany([

      {nome: " ", idade:" ", aldeia: " ", rank: " ", missao_atual: " ", status: " "},

    ])

  }
}