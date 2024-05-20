import Aldeia from '#models/aldeia'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Aldeia.createMany([
      { nome: "Konohagakure", descricao: "A Vila Oculta da Folha, lar do Clã Uzumaki e do protagonista Naruto Uzumaki. Conhecida por sua forte aliança com outras aldeias e por produzir alguns dos ninjas mais habilidosos do mundo.", localizacao: "País do Fogo", pais: "Fire Country" },
      { nome: "Sunagakure", descricao: "A Vila Oculta da Areia, conhecida por sua localização no deserto e por sua força militar. Lar do Clã Kazekage.", localizacao: "País do Vento", pais: "Wind Country" },
    ])

  }
}
