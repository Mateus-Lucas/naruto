import PersonagemIten from '#models/personagem_iten'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemIten.createMany([
      { personagemId: 1, itenId: 1 },
      { personagemId: 2, itenId: 1 },
    ])

  }
}
