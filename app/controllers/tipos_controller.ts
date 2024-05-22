import Tipo from '#models/tipo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TiposController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Tipo.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Tipo.query()
                            .where('id', params.id)
                            .preload('jutso')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao'])
        return await Tipo.create(dados)
    }

    async update({params, request}: HttpContext){

        const tipo = await Tipo.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao'])

        tipo.merge(dados)
        return await tipo.save()
    }

    async destroy({params}: HttpContext){
        const tipo = await Tipo.findOrFail(params.id)
        
        await tipo.delete()
        return {msg: 'Registro deletado com sucesso', tipo}
    }
}