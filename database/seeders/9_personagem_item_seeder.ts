import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemIten from '#models/personagem_iten'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemIten.createMany([

      {personagemId: 1, itemId:1 },

    ])

  }
}