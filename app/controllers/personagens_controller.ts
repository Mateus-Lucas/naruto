import Personagen from '#models/personagen'
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonagensController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Personagen.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Personagen.query()
                            .where('id', params.id)
                            .preload('aldeia')
                            .preload('itens')
                            .preload('jutsos')
                            .preload('missoes')
                            .preload('titulo')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'idade', 'aldeia','rank_num', 'missao_atual', 'status', 'aldeiaId', 'habilidadeId', 'itenId', 'justoId', 'missoeId', 'tituloId'])
        return await Personagen.create(dados)
    }

    async update({params, request}: HttpContext){

        const personagen = await Personagen.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'dificuldade','status'])

        personagen.merge(dados)
        return await personagen.save()
    }

    async destroy({params}: HttpContext){
        const personagen = await Personagen.findOrFail(params.id)
        
        await personagen.delete()
        return {msg: 'Registro deletado com sucesso', personagen}
    }
}