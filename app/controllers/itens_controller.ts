import type { HttpContext } from '@adonisjs/core/http'

import Iten from "#models/iten"

export default class ItensController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Iten.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Iten.query()
                            .where('id', params.id)
                            .preload('personagen')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao', 'tipo'])
        return await Iten.create(dados)
    }

    async update({params, request}: HttpContext){

        const iten = await Iten.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'tipo'])

        iten.merge(dados)
        return await iten.save()
    }

    async destroy({params}: HttpContext){
        const iten = await Iten.findOrFail(params.id)
        
        await iten.delete()
        return {msg: 'Registro deletado com sucesso', iten}
    }
}