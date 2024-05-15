import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Jutso from '../../app/models/jutso'

export default class extends BaseSeeder {
  async run() {
    
    await Jutso.createMany([

      {nome: " ", descricao:" ", tipo: " ", elemento: " "},

    ])

  }
}