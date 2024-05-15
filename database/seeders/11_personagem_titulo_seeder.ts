import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PersonagemTitulo from '#models/personagem_titulo'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemTitulo.createMany([

      { personagemId: 1, tituloId: 1, data_inicio: '2023-01-01', data_fim: '2023-12-31' },
      { personagemId: 1, tituloId: 2, data_inicio: '2023-01-01', data_fim: '2023-12-31' },
      { personagemId: 2, tituloId: 3, data_inicio: '2023-01-01', data_fim: '2023-12-31' },
      
    ])

  }
}
