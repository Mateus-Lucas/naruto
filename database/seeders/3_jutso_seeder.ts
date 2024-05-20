import Jutso from '#models/jutso'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Jutso.createMany([
      { nome: "Rasengan", descricao: "Uma técnica de ninjutsu poderosa, criada pelo Quarto Hokage, Minato Namikaze. Consiste em uma esfera de chakra que causa danos significativos ao alvo.", tipo: "Ninjutsu", elemento: "Sem elemento" },
      { nome: "Chidori", descricao: "Uma técnica de ninjutsu desenvolvida por Kakashi Hatake. Consiste em concentrar uma grande quantidade de chakra na mão, formando uma corrente elétrica que pode perfurar alvos facilmente.", tipo: "Ninjutsu", elemento: "Raiton (Relâmpago)" },
    ])

  }
}
