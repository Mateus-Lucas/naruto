import Aldeia from '#models/aldeia'
import type { HttpContext } from '@adonisjs/core/http'

export default class AldeiasController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Aldeia.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Aldeia.query()
                            .where('id', params.id)
                            .preload('personagens')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao', 'localizacao', 'pais'])
        return await Aldeia.create(dados)
    }

    async update({params, request}: HttpContext){

        const aldeia = await Aldeia.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'localizacao', 'pais'])

        aldeia.merge(dados)
        return await aldeia.save()
    }

    async destroy({params}: HttpContext){
        const aldeia = await Aldeia.findOrFail(params.id)
        
        await aldeia.delete()
        return {msg: 'Registro deletado com sucesso', aldeia}
    }
}