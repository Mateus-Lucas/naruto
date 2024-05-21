import type { HttpContext } from '@adonisjs/core/http'
import Habilidade from "#models/habilidade"

export default class HabilidadesController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Habilidade.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Habilidade.query()
                            .where('id', params.id)
                            .preload('personagen')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'descricao', 'tipo'])
        return await Habilidade.create(dados)
    }

    async update({params, request}: HttpContext){

        const habilidade = await Habilidade.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'tipo'])

        habilidade.merge(dados)
        return await habilidade.save()
    }

    async destroy({params}: HttpContext){
        const habilidade = await Habilidade.findOrFail(params.id)
        
        await habilidade.delete()
        return {msg: 'Registro deletado com sucesso', habilidade}
    }
}