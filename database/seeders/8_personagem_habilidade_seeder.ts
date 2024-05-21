import PersonagemHabilidade from '#models/personagem_habilidade'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemHabilidade.createMany([
      { personagenId: 1, habilidadeId: 1 },
      { personagenId: 2, habilidadeId: 1 },
    ])

  }
}
