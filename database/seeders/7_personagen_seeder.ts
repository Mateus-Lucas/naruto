import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Personagen from '#models/personagen'

export default class extends BaseSeeder {
  async run() {
    
    await Personagen.createMany([
      {nome: "Naruto Uzumaki", idade: 19, aldeia: "Vila da Folha", rank: "Hokage", missao_atual: "Proteger a Vila da Folha", status: "Vivo"},
      {nome: "Sasuke Uchiha", idade: 19, aldeia: "Vila da Folha", rank: "Nukenin", missao_atual: "Buscar redenção e proteger Konoha das sombras", status: "Vivo"},
      {nome: "Sakura Haruno", idade: 19, aldeia: "Vila da Folha", rank: "Chunin", missao_atual: "Servir como médica e proteger a vila", status: "Viva"},
      {nome: "Kakashi Hatake", idade: 46, aldeia: "Vila da Folha", rank: "Jounin", missao_atual: "Aconselhar e orientar a nova geração de ninjas", status: "Vivo"},
      {nome: "Shikamaru Nara", idade: 20, aldeia: "Vila da Folha", rank: "Jounin", missao_atual: "Liderar missões táticas e estratégicas", status: "Vivo"},
      {nome: "Hinata Hyuga", idade: 19, aldeia: "Vila da Folha", rank: "Jounin", missao_atual: "Aprimorar suas habilidades e apoiar Naruto", status: "Viva"},
      {nome: "Gaara", idade: 19, aldeia: "Vila da Areia", rank: "Kazekage", missao_atual: "Proteger a Vila da Areia e fortalecer as relações com Konoha", status: "Vivo"},
      {nome: "Rock Lee", idade: 20, aldeia: "Vila da Folha", rank: "Chunin", missao_atual: "Treinar arduamente para superar suas limitações físicas", status: "Vivo"},
      {nome: "Neji Hyuga", idade: 19, aldeia: "Vila da Folha", rank: "Jounin", missao_atual: "Aprimorar suas habilidades e proteger sua família", status: "Vivo"},
      {nome: "Tsunade Senju", idade: 56, aldeia: "Vila da Folha", rank: "Hokage", missao_atual: "Guiar a próxima geração de ninjas e proteger Konoha", status: "Viva"},
    ])

  }
}
