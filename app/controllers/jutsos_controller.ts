import type { HttpContext } from '@adonisjs/core/http'

import Jutso from "#models/jutso"

export default class JutsosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Jutso.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Jutso.query()
                            .where('id', params.id)
                            .preload('personagen')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao', 'tipo', 'elemento'])
        return await Jutso.create(dados)
    }

    async update({params, request}: HttpContext){

        const jutso = await Jutso.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'tipo', 'elemento'])

        jutso.merge(dados)
        return await jutso.save()
    }

    async destroy({params}: HttpContext){
        const jutso = await Jutso.findOrFail(params.id)
        
        await jutso.delete()
        return {msg: 'Registro deletado com sucesso', jutso}
    }
}