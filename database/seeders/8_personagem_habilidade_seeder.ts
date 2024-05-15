import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemHabilidade from '#models/personagem_habilidade'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemHabilidade.createMany([
      
      { personagemId: 1, habilidadeId: 1 },
      { personagemId: 1, habilidadeId: 2 },
      { personagemId: 2, habilidadeId: 3 },
    ])

  }
}
