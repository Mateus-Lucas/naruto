import Titulo from '#models/titulo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TitulosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Titulo.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Titulo.query()
                            .where('id', params.id)
                            .preload('personagens')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao'])
        return await Titulo.create(dados)
    }

    async update({params, request}: HttpContext){

        const titulo = await Titulo.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao'])

        titulo.merge(dados)
        return await titulo.save()
    }

    async destroy({params}: HttpContext){
        const titulo = await Titulo.findOrFail(params.id)
        
        await titulo.delete()
        return {msg: 'Registro deletado com sucesso', titulo}
    }
}