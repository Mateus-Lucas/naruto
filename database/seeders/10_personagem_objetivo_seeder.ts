import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemObjetivo from '#models/personagem_objetivo'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemObjetivo.createMany([
      
      { personagemId: 1, missaoId: 1 },
      { personagemId: 1, missaoId: 2 },
      { personagemId: 2, missaoId: 3 },
    ])

  }
}
