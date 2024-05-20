import Missoe from '#models/missoe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Missoe.createMany([
      { nome: "Resgate do Daimyo", descricao: "Uma missão para resgatar o Daimyo de um sequestro realizado por ninjas renegados.", dificuldade: "Alta", status: "Em andamento" },
      { nome: "Eliminação de Ninjas Renegados", descricao: "Uma missão para eliminar ninjas renegados que estão causando problemas na fronteira de uma vila.", dificuldade: "Média", status: "Concluída" },
    ])

  }
}
