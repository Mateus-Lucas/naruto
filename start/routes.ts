/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AldeiasController from '#controllers/aldeias_controller'
import HabilidadesController from '#controllers/habilidades_controller'
import ItensController from '#controllers/itens_controller'
import JutsosController from '#controllers/jutsos_controller'
import MissoesController from '#controllers/missoes_controller'
import PersonagensController from '#controllers/personagens_controller'
import TitulosController from '#controllers/titulos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/titulos', TitulosController).apiOnly()
router.resource('/itens', ItensController).apiOnly()
router.resource('/jutsos', JutsosController).apiOnly()
router.resource('/missoes', MissoesController).apiOnly()
router.resource('/aldeias', AldeiasController).apiOnly()
router.resource('/habilidades', HabilidadesController).apiOnly()
router.resource('/personagens', PersonagensController).apiOnly()
