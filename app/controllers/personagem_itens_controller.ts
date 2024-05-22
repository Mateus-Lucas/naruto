import PersonagemIten from '#models/personagem_iten'
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonagemItensController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await PersonagemIten.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await PersonagemIten.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['personagenId', 'itenId'])
        return await PersonagemIten.create(dados)
    }

    async update({params, request}: HttpContext){
        const personagensIten = await PersonagemIten.findOrFail(params.id)
        const dados = request.only(['personagenId', 'itenId'])
        
        personagensIten.merge(dados)
        return await personagensIten.save()
    }

    async destroy({ params }: HttpContext) {
        const personagensIten = await PersonagemIten.findOrFail(params.id)

        await personagensIten.delete()
        return { msg: 'Registro deletado com sucesso', personagensIten }

    }
}
