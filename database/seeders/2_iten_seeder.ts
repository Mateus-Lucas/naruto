import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Iten from '../../app/models/iten'

export default class extends BaseSeeder {
  async run() {
    
    await Iten.createMany([

      {nome: " ", descricao:" ", tipo: " "},

    ])

  }
}