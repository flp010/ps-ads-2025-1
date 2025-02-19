import {PrismaClient } from '@prisma/client'        

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query'
        }
    ]
})

// Exibe no console as intruções SQL enviadas ao DB
prisma.$on('query', event =>{
    console.log('-'.repeat(60))
    console.log(event.query)
    if(event.params) console.log('PARAMS:', event.params)
})
export default prisma

