import Titulo from '#models/titulo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Titulo.createMany([
      { nome: "Hokage", descricao: "O líder supremo de Konoha, também conhecido como o 'Fogo das Folhas'. Este título é concedido ao ninja mais poderoso da vila." },
      { nome: "Sannin", descricao: "Os três lendários ninjas de Konoha: Jiraiya, Tsunade e Orochimaru. Eles são conhecidos por sua excepcional habilidade e força." },
    ])

  }
}
