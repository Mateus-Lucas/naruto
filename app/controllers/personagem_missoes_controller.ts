import PersonagemMissoe from '#models/personagem_missoe'
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonagemMissoesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await PersonagemMissoe.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await PersonagemMissoe.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['personagenId', 'missaoId'])
        return await PersonagemMissoe.create(dados)
    }

    async update({params, request}: HttpContext){
        const personagensMissoes = await PersonagemMissoe.findOrFail(params.id)
        const dados = request.only(['personagenId', 'missaoId'])
        
        personagensMissoes.merge(dados)
        return await personagensMissoes.save()
    }

    async destroy({ params }: HttpContext) {
        const personagensMissoes = await PersonagemMissoe.findOrFail(params.id)

        await personagensMissoes.delete()
        return { msg: 'Registro deletado com sucesso', personagensMissoes }

    }
}