import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Habilidade from '#models/habilidade'

export default class extends BaseSeeder {
  async run() {
    
    await Habilidade.createMany([
      {nome: "Taijutsu", descricao: "Um estilo de luta corpo a corpo que se concentra no uso eficiente do corpo e dos movimentos físicos.", tipo: "Física"},
      {nome: "Ninjutsu", descricao: "A arte de usar técnicas ninjas que envolvem manipulação de chakra para realizar várias habilidades.", tipo: "Chakra"},
      {nome: "Genjutsu", descricao: "A arte de usar ilusões para confundir, enganar ou manipular os sentidos do adversário.", tipo: "Mental"},
      {nome: "Kenjutsu", descricao: "A arte de usar espadas em combate, envolvendo técnicas de corte, estocada e movimento.", tipo: "Arma"},
      {nome: "Shurikenjutsu", descricao: "A arte de usar shurikens e outras armas de arremesso em combate, geralmente em conjunção com outras técnicas.", tipo: "Arma"},
      {nome: "Fuinjutsu", descricao: "A arte de selar objetos, chakra ou até mesmo pessoas dentro de pergaminhos ou outros dispositivos.", tipo: "Chakra"},
      {nome: "Kekkei Genkai", descricao: "Habilidades únicas e hereditárias que são passadas de geração em geração dentro de certas linhagens de sangue.", tipo: "Especial"},
      {nome: "Kugutsu", descricao: "A arte de manipular marionetes em combate, usando fios de chakra para controlar seus movimentos e ataques.", tipo: "Chakra"},
      {nome: "Iryojutsu", descricao: "A arte de curar ferimentos e doenças usando técnicas médicas e chakra.", tipo: "Chakra"},
      {nome: "Senjutsu", descricao: "A arte de usar energia natural para aumentar o poder e as habilidades do ninja.", tipo: "Chakra"},
      {nome: "Bukijutsu", descricao: "A arte de usar armas tradicionais, como espadas, lanças e arcos, em combate.", tipo: "Arma"},
    ])

  }
}
