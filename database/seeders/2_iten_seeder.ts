import Titulo from '#models/titulo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Titulo.createMany([
      {nome: "Ninja de Elite", descricao: "Um título dado aos ninjas mais habilidosos e respeitados da Vila da Folha."},
      {nome: "Hokage", descricao: "O líder supremo da Vila da Folha, responsável por proteger e guiar seu povo."},
      {nome: "Genin", descricao: "O primeiro nível de classificação de um ninja, geralmente composto por jovens em treinamento."},
      {nome: "Chunin", descricao: "Um nível intermediário de classificação de ninja, responsável por missões mais difíceis."},
      {nome: "Jounin", descricao: "Um nível avançado de classificação de ninja, geralmente liderando equipes e missões importantes."},
      {nome: "Akatsuki", descricao: "Uma organização criminosa composta por ninjas renegados de diversas vilas."},
      {nome: "Sharingan", descricao: "Um poderoso dōjutsu que concede habilidades especiais, como prever movimentos e copiar técnicas."},
      {nome: "Rasengan", descricao: "Uma técnica de ninjutsu que cria uma esfera giratória de chakra extremamente poderosa."},
      {nome: "Kage Bunshin no Jutsu", descricao: "Uma técnica que cria clones físicos do usuário, capazes de realizar tarefas e lutar."},
      {nome: "Sannin", descricao: "Os três ninjas lendários de Konoha: Jiraiya, Tsunade e Orochimaru."},
      {nome: "Jinchuuriki", descricao: "Um hospedeiro de uma besta com cauda, como Naruto, que possui uma Kurama selada dentro de si."},
    ])

  }
}
