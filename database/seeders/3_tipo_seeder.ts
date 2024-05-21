import Tipo from '#models/tipo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Tipo.createMany([
      {
        nome: "Genjutsu",
        descricao: "Genjutsu é uma categoria de técnicas que utilizam o chakra para afetar a mente do alvo. Em vez de causar danos físicos diretos, o genjutsu manipula os sentidos e cria ilusões, fazendo o alvo ver, ouvir, sentir e até mesmo cheirar coisas que não estão realmente presentes. Estas técnicas podem ser usadas para confundir, paralisar ou até mesmo controlar o oponente. Mestres do genjutsu, como Itachi Uchiha, podem lançar ilusões tão convincentes que é difícil para o alvo perceber que está sob um genjutsu."
      },
      {
        nome: "Taijutsu",
        descricao: "Taijutsu refere-se a técnicas de combate corpo a corpo que dependem principalmente de força física e habilidades marciais. Ao contrário de genjutsu e ninjutsu, o taijutsu não requer manipulação de chakra, embora muitos praticantes combinem suas habilidades físicas com o uso de chakra para aumentar a potência de seus ataques. O taijutsu é essencialmente o domínio das artes marciais e inclui socos, chutes, bloqueios e esquivas. Personagens como Rock Lee e Might Guy são especialistas em taijutsu e demonstram que, com treino árduo, essas técnicas podem ser incrivelmente poderosas."
      },
      {
        nome: "Ninjutsu",
        descricao: "Ninjutsu é uma vasta categoria de técnicas que utilizam o chakra para realizar uma variedade de efeitos. Estas técnicas podem incluir a criação de elementos como fogo, água, vento, terra e relâmpago, ou habilidades especiais como a clonagem, transformação e invocação de criaturas. Ninjutsu requer uma combinação de manipulação de chakra e selos de mão para canalizar o poder desejado. É a forma mais versátil de técnica ninja, e quase todos os ninjas no universo de 'Naruto' usam algum tipo de ninjutsu. O protagonista, Naruto Uzumaki, é famoso por seu uso de ninjutsu como o Rasengan e a Técnica dos Clones das Sombras."
      }
    ])
  }

}