import type { HttpContext } from '@adonisjs/core/http'
import Missoe from "#models/missoe"

export default class MissoesController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Missoe.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Missoe.query()
                            .where('id', params.id)
                            .preload('personagen')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao', 'dificuldade','status'])
        return await Missoe.create(dados)
    }

    async update({params, request}: HttpContext){

        const missoe = await Missoe.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'dificuldade','status'])

        missoe.merge(dados)
        return await missoe.save()
    }

    async destroy({params}: HttpContext){
        const missoe = await Missoe.findOrFail(params.id)
        
        await missoe.delete()
        return {msg: 'Registro deletado com sucesso', missoe}
    }
}