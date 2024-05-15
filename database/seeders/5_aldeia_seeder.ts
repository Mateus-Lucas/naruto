import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Aldeia from '../../app/models/aldeia'

export default class extends BaseSeeder {
  async run() {
    
    await Aldeia.createMany([
      {nome: "Vila da Folha", descricao: "Também conhecida como Konohagakure, é uma das Cinco Grandes Vilas Ninja e a casa do clã Uzumaki.", localizacao: "País do Fogo", pais: "País do Fogo"},
      {nome: "Vila da Areia", descricao: "Também conhecida como Sunagakure, é uma das Cinco Grandes Vilas Ninja e é conhecida por seu forte sistema de defesa.", localizacao: "País do Vento", pais: "País do Vento"},
      {nome: "Vila da Névoa", descricao: "Também conhecida como Kirigakure, é uma das Cinco Grandes Vilas Ninja e é conhecida por sua especialização em técnicas de água.", localizacao: "País da Água", pais: "País da Água"},
      {nome: "Vila da Pedra", descricao: "Também conhecida como Iwagakure, é uma das Cinco Grandes Vilas Ninja e é conhecida por seu terreno rochoso e montanhoso.", localizacao: "País da Terra", pais: "País da Terra"},
      {nome: "Vila da Nuvem", descricao: "Também conhecida como Kumogakure, é uma das Cinco Grandes Vilas Ninja e é conhecida por sua especialização em técnicas de raios.", localizacao: "País do Raio", pais: "País do Raio"},
      {nome: "Vila da Cachoeira", descricao: "Também conhecida como Takigakure, é uma vila ninja conhecida por sua bela paisagem natural e cachoeiras.", localizacao: "País da Chuva", pais: "País da Chuva"},
      {nome: "Vila da Grama", descricao: "Também conhecida como Kusagakure, é uma vila ninja conhecida por suas vastas planícies e sua proximidade com a Floresta da Morte.", localizacao: "País da Grama", pais: "País da Grama"},
      {nome: "Vila do Som", descricao: "Também conhecida como Otogakure, é uma vila ninja fundada por Orochimaru, conhecida por suas técnicas de som e seu estilo de vida underground.", localizacao: "País do Som", pais: "País do Som"},
      {nome: "Vila da Lua", descricao: "Também conhecida como Getsugakure, é uma vila ninja localizada na fronteira entre os países do Fogo e do Raio.", localizacao: "Fronteira entre o País do Fogo e o País do Raio", pais: "Desconhecido"},
      {nome: "Vila do Ferro", descricao: "Também conhecida como Tetsugakure, é uma vila ninja localizada em um arquipélago isolado, conhecida por sua tecnologia avançada.", localizacao: "Arquipélago do País da Terra", pais: "País da Terra"},
    ])

  }
}
