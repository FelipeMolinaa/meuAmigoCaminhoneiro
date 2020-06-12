import {Request, Response} from 'express'
import knex from '../database/connection'

import PasswordCrypt from '../utils/passwordCrypt'


const passwordCrypt = new PasswordCrypt()

class caminhoneirosController{
    async show(request: Request, response: Response){
        const {
            whatsapp,
            senha
        } = request.body

        const caminhoneiro = await knex('caminhoneiros').where('whatsapp', whatsapp).first()

        if(!caminhoneiro){
            return response.json({
                status: 'WHATSAPPNOTEXIST',
                message: 'Email Inexistente'
            })
        }

        const passwordcompare = passwordCrypt.ComparaSenha(senha, caminhoneiro.senha)

        if(!passwordcompare){
            return response.json({
                status: 'PASSWORDNOTTRUE',
                message: 'Senha incorreta'
            })
        }

        return response.json({
            ...caminhoneiro,
            message: "ENTRANDO",
            status: "SUCCESS"
        })
    }

    async index(request: Request, response: Response){
        const users = await knex('users').select('*')

        return response.json(users) 
    }

    async create(request: Request, response: Response){
        const {
            nome,
            whatsapp,
            senha,
            idade,
            doencas,
            fazAtividades,
            horasSono,
            tipoTrabalho,
            refeicoes
        } = request.body

        const caminhoneiro ={
            nome,
            whatsapp,
            senha,
            idade,
            doencas,
            fazAtividades,
            horasSono,
            tipoTrabalho,
            refeicoes
        }

        const insertedId = await knex('caminhoneiros').insert(caminhoneiro)

        return response.json({
            id:insertedId[0],
            ...caminhoneiro
        })
    }
}

export default caminhoneirosController