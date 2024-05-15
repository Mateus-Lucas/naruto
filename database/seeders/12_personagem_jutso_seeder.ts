import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemJutso from '#models/personagem_jutso'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemJutso.createMany([
      { personagemId: 1, jutsuId: 1 },
      { personagemId: 1, jutsuId: 2 },
      { personagemId: 2, jutsuId: 3 },
      
    ])

  }
}
