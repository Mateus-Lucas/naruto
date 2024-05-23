import PersonagemMissoe from '#models/personagem_missoe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemMissoe.createMany([
      { personagenId: 1, missoeId: 1 },
      { personagenId: 2, missoeId: 1 },
    ])

  }
}