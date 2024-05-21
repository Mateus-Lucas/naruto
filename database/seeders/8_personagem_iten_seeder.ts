import PersonagemIten from '#models/personagem_iten'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemIten.createMany([
      { personagenId: 1, itenId: 1 },
      { personagenId: 2, itenId: 1 },
    ])

  }
}
