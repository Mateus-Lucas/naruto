import Habilidade from '#models/habilidade'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Habilidade.createMany([
      { nome: "Rasengan", descricao: "Uma técnica de ninjutsu poderosa, criada pelo Quarto Hokage, Minato Namikaze. Consiste em uma esfera de chakra que causa danos significativos ao alvo.", tipo: "Ninjutsu" },
      { nome: "Byakugan", descricao: "Uma habilidade visual única do Clã Hyuga, que concede ao usuário visão de 360 graus e a capacidade de ver através de objetos sólidos.", tipo: "Kekkei Genkai" },
    ])

  }
}
