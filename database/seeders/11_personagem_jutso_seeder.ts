import PersonagemJutso from '#models/personagem_jutso'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemJutso.createMany([
      { personagenId: 1, jutsuId: 1 },
      { personagenId: 2, jutsuId: 1 },
    ])

  }
}