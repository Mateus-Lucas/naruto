import PersonagemTitulo from '#models/personagem_titulo'
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonagemTitulosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await PersonagemTitulo.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await PersonagemTitulo.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['personagenId', 'tituloId'])
        return await PersonagemTitulo.create(dados)
    }

    async update({params, request}: HttpContext){
        const personagensTitulos = await PersonagemTitulo.findOrFail(params.id)
        const dados = request.only(['personagenId', 'tituloId'])
        
        personagensTitulos.merge(dados)
        return await personagensTitulos.save()
    }

    async destroy({ params }: HttpContext) {
        const personagensTitulos = await PersonagemTitulo.findOrFail(params.id)

        await personagensTitulos.delete()
        return { msg: 'Registro deletado com sucesso', personagensTitulos }

    }
}