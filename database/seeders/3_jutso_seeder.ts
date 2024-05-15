import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Jutso from '../../app/models/jutso'

export default class extends BaseSeeder {
  async run() {
    
    await Jutso.createMany([
      {nome: "Rasengan", descricao: "Uma esfera de chakra giratória de alta velocidade e alta potência criada por Minato Namikaze.", tipo: "Ninjutsu", elemento: "Nenhum"},
      {nome: "Chidori", descricao: "Uma técnica de ninjutsu que concentra uma grande quantidade de chakra na mão do usuário, causando um ruído semelhante ao de mil pássaros.", tipo: "Ninjutsu", elemento: "Raio"},
      {nome: "Kage Bunshin no Jutsu", descricao: "Uma técnica que cria clones físicos do usuário, capazes de realizar tarefas e lutar.", tipo: "Ninjutsu", elemento: "Nenhum"},
      {nome: "Katon: Goukakyuu no Jutsu", descricao: "Uma técnica de liberação de fogo que expulsa uma grande bola de fogo da boca do usuário.", tipo: "Ninjutsu", elemento: "Fogo"},
      {nome: "Suiton: Suiryuudan no Jutsu", descricao: "Uma técnica de liberação de água que cria um grande dragão de água para atacar o oponente.", tipo: "Ninjutsu", elemento: "Água"},
      {nome: "Rasenshuriken", descricao: "Uma versão aprimorada do Rasengan, criada por Naruto Uzumaki, que combina a esfera giratória de chakra com lâminas cortantes de vento.", tipo: "Ninjutsu", elemento: "Vento"},
      {nome: "Tsukuyomi", descricao: "Uma técnica de genjutsu que lança o oponente em um mundo de ilusão, onde o usuário tem controle total sobre o tempo e espaço.", tipo: "Genjutsu", elemento: "Nenhum"},
      {nome: "Amaterasu", descricao: "Uma técnica de ninjutsu que cria chamas negras eternas que queimam tudo o que tocam.", tipo: "Ninjutsu", elemento: "Fogo"},
      {nome: "Kuchiyose no Jutsu", descricao: "A técnica de invocação que permite que um ninja invoque animais, objetos e até mesmo pessoas para ajudá-los em batalha.", tipo: "Ninjutsu", elemento: "Nenhum"},
      {nome: "Rinnegan", descricao: "O olho celestial que concede ao usuário habilidades divinas, como controlar os seis caminhos e manipular o chakra de forma avançada.", tipo: "Kekkei Genkai", elemento: "Nenhum"},
      {nome: "Mangekyou Sharingan", descricao: "Uma forma avançada do Sharingan que concede ao usuário habilidades únicas, como o Kamui e o Amaterasu.", tipo: "Kekkei Genkai", elemento: "Nenhum"},
    ])

  }
}
