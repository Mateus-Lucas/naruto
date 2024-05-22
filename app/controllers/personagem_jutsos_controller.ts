import type { HttpContext } from '@adonisjs/core/http'
import PersonagemJutso from "#models/personagem_jutso"

export default class PersonagemJutsosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await PersonagemJutso.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await PersonagemJutso.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['personagenId', 'jutsuId'])
        return await PersonagemJutso.create(dados)
    }

    async update({params, request}: HttpContext){
        const personagensJutsus = await PersonagemJutso.findOrFail(params.id)
        const dados = request.only(['personagenId', 'jutsuId'])
        
        personagensJutsus.merge(dados)
        return await personagensJutsus.save()
    }

    async destroy({ params }: HttpContext) {
        const personagensJutsus = await PersonagemJutso.findOrFail(params.id)

        await personagensJutsus.delete()
        return { msg: 'Registro deletado com sucesso', personagensJutsus }

    }
}