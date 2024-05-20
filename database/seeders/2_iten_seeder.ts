import Iten from '#models/iten'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Iten.createMany([
      { nome: "Shuriken", descricao: "Uma pequena lâmina afiada, frequentemente utilizada como arma arremessável por ninjas.", tipo: "Arma" },
      { nome: "Kunai", descricao: "Uma ferramenta multiuso com uma ponta afiada e uma alça na extremidade, usada como arma ou ferramenta de escalada.", tipo: "Arma" },
    ])

  }
}
