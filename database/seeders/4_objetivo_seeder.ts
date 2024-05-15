import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Objetivo from '../../app/models/objetivo'

export default class extends BaseSeeder {
  async run() {
    
    await Objetivo.createMany([
      {nome: "Tornar-se Hokage", descricao: "O sonho de Naruto Uzumaki, que busca se tornar o líder supremo da Vila da Folha.", dificuldade: "Alta", status: "Em andamento"},
      {nome: "Proteger Sasuke", descricao: "O objetivo de Naruto Uzumaki, que está determinado a trazer seu amigo de volta para casa e protegê-lo de qualquer ameaça.", dificuldade: "Média", status: "Concluído"},
      {nome: "Vencer o Exame Chunin", descricao: "Um objetivo comum entre os ninjas em treinamento, que desejam provar sua habilidade e avançar para o próximo nível de classificação.", dificuldade: "Média", status: "Em andamento"},
      {nome: "Dominar o Rasengan", descricao: "Um objetivo de treinamento para ninjas que buscam dominar essa técnica lendária de Minato Namikaze.", dificuldade: "Alta", status: "Em andamento"},
      {nome: "Derrotar Orochimaru", descricao: "Um objetivo compartilhado por muitos ninjas, que desejam acabar com as ameaças do renegado Sannin.", dificuldade: "Alta", status: "Concluído"},
      {nome: "Salvar o Mundo Shinobi", descricao: "O objetivo final dos heróis de Naruto, que lutam para proteger suas vilas e o mundo ninja de ameaças como a Akatsuki e Kaguya.", dificuldade: "Extrema", status: "Em andamento"},
      {nome: "Aprender o Kage Bunshin no Jutsu", descricao: "Um objetivo de treinamento para novos ninjas que buscam dominar essa técnica básica e versátil.", dificuldade: "Baixa", status: "Em andamento"},
      {nome: "Aprimorar o Sharingan", descricao: "Um objetivo para os usuários do Sharingan que desejam desenvolver suas habilidades e desbloquear novos poderes.", dificuldade: "Alta", status: "Em andamento"},
      {nome: "Encontrar todas as Jinchuuriki", descricao: "Um objetivo de pesquisa para ninjas que desejam localizar e proteger todos os hospedeiros das bestas com cauda.", dificuldade: "Extrema", status: "Em andamento"},
      {nome: "Conquistar a Confiança de Gaara", descricao: "Um objetivo pessoal para Naruto Uzumaki, que busca se tornar amigo e aliado do antigo inimigo.", dificuldade: "Média", status: "Concluído"},
    ])

  }
}
