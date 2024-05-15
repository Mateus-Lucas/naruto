import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemTitulo from '#models/personagem_titulo'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemTitulo.createMany([

      {personagemId: 1, tituloId: 1, data_inicio: new Date("2022-04-13"), data_fim: new Date("2022-04-13") },

    ])

  }
}