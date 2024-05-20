import PersonagemHabilidade from '#models/personagem_habilidade'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemHabilidade.createMany([
      { personagemId: 1, habilidadeId: 1 },
      { personagemId: 1, habilidadeId: 2 },
    ])

  }
}
