import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Objetivo from '../../app/models/objetivo'

export default class extends BaseSeeder {
  async run() {
    
    await Objetivo.createMany([

      {nome: " ", descricao:" ", dificuldade: " ", status: " "},

    ])

  }
}