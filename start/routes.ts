/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AldeiasController from '#controllers/aldeias_controller'
import ItensController from '#controllers/itens_controller'
import JutsusController from '#controllers/jutsus_controller'
import MissoesController from '#controllers/missoes_controller'
import PersonagemItensController from '#controllers/personagem_itens_controller'
import PersonagemJutsosController from '#controllers/personagem_jutsos_controller'
import PersonagemMissoesController from '#controllers/personagem_missoes_controller'
import PersonagemTitulosController from '#controllers/personagem_titulos_controller'
import PersonagensController from '#controllers/personagens_controller'
import TiposController from '#controllers/tipos_controller'
import TitulosController from '#controllers/titulos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/titulos', TitulosController).apiOnly()
router.resource('/itens', ItensController).apiOnly()
router.resource('/jutsus', JutsusController).apiOnly()
router.resource('/missoes', MissoesController).apiOnly()
router.resource('/aldeias', AldeiasController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/personagens', PersonagensController).apiOnly()
router.resource('/personagem_itens', PersonagemItensController).apiOnly()
router.resource('/personagem_jutsos', PersonagemJutsosController).apiOnly()
router.resource('/personagem_missoes', PersonagemMissoesController).apiOnly()
router.resource('/personagem_titulos', PersonagemTitulosController).apiOnly()