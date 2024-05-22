import PersonagemTitulo from '#models/personagem_titulo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await PersonagemTitulo.createMany([
      { personagenId: 1, tituloId: 1 },
      { personagenId: 2, tituloId: 1 },
    ])

  }
}