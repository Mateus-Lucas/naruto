import Jutso from '#models/jutso'
import type { HttpContext } from '@adonisjs/core/http'

export default class JutsosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Jutso.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Jutso.query()
                            .where('id', params.id)
                            .preload('tipo')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao', 'tipo', 'elemento'])
        return await Jutso.create(dados)
    }

    async update({params, request}: HttpContext){

        const jutsu = await Jutso.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'tipo', 'elemento'])

        jutsu.merge(dados)
        return await jutsu.save()
    }

    async destroy({params}: HttpContext){
        const jutsu = await Jutso.findOrFail(params.id)
        
        await jutsu.delete()
        return {msg: 'Registro deletado com sucesso', jutsu}
    }
}