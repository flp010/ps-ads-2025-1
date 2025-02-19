import prisma from '../database/client.js'

const controller = {}   // Objeto vazio    

controller.create = async function (req, res) {
    try {
        // Dentro do parâmetro rq (requisição), haverá 
        // um objeto chamado "body" que contém as informações 
        // que queremos armazenar do BD. Então, invocamos o 
        // Prisma para fazer a interface com o DB, repassando 
        // o req.body
        await prisma.customer.create({ data: req.body })

        // Se der tudo certo, enviamos como resposata o 
        // código HTTP apropriado, no caso
        // HTTP 201: created
        res.status(201).end()
    }
    catch (error) {
        // Se algo de errado acontecer, cairemos aqui
        // Nesse caso, vamos exibir o erro no console e enviar 
        // o código HTTP correspondente a erro do servidor 
        // HTTP 500: Internal Server Error
        console.error(error)
        res.status(500).end()
    }
}

export default controller
