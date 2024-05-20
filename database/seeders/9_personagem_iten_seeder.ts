import PersonagemIten from '#models/personagem_iten'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemIten.createMany([
      { personagemId: 1, itemId: 1 },
      { personagemId: 1, itemId: 2 },
    ])

  }
}
