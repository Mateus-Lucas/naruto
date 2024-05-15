import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemIten from '#models/personagem_iten'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemIten.createMany([
      { personagemId: 1, itemId: 1 },
      { personagemId: 1, itemId: 2 },
      { personagemId: 2, itemId: 3 },
    ])

  }
}
