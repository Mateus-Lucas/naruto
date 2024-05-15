import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Aldeia from '../../app/models/aldeia'

export default class extends BaseSeeder {
  async run() {
    
    await Aldeia.createMany([

      {nome: " ", descricao:" ", localizacao: " ", pais: " "},

    ])

  }
}