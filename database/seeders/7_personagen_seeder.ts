import Personagen from '#models/personagen'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Personagen.createMany([
      { nome: "Naruto Uzumaki", idade: "17", aldeiaId: 1, rankNum: "Hokage", missao_atual: "Proteger a vila", status: "Ativo", tituloId: 1},
      { nome: "Sasuke Uchiha", idade: "17", aldeiaId: 1, rankNum: "Nukenin", missao_atual: "Buscar poder", status: "Ativo" },
    ])

  }
}
