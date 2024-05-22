import PersonagemMissoe from '#models/personagem_missoe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemMissoe.createMany([
      { personagenId: 1, missaoId: 1 },
      { personagenId: 2, missaoId: 1 },
    ])

  }
}