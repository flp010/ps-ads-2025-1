import { z } from 'zod'

const colors = [
  'AMARELO', 'AZUL', 'BRANCO', 'CINZA', 'DOURADO',
  'LARANJA', 'MARROM', 'PRATA', 'PRETO', 'ROSA',
  'ROXO', 'VERMELHO'
]

const maxDate = new Date()

const minManufactureDate = new Date()
minManufactureDate.setFullYear(minManufactureDate.getFullYear() - 65) // 65 anos atrás

const minSellingDate = new Date('2020-01-01')

const Cars = z.object({
  brand: z.string()
    .trim()
    .min(1, { message: 'Marca deve ter, no mínimo, 1 caractere.' })
    .max(25, { message: 'Marca pode ter, no máximo, 25 caracteres.' }),

  model: z.string()
    .trim()
    .min(1, { message: 'Modelo deve ter, no mínimo, 1 caractere.' })
    .max(40, { message: 'Modelo pode ter, no máximo, 40 caracteres.' }),

  color: z.enum(colors, { message: 'Cor inválida ou não informada' }),

  year_manufacture: z.coerce.number()
  .min(1960, { message: 'Ano mínimo é 1960.' }) // Compara diretamente com o número 1960
  .max(new Date().getFullYear(), { message: 'Ano máximo é o ano atual.' }),

  imported: z.boolean({ required_error: 'Importado inválido ou não informado' }),

  plates: z.string()
    .trim()
    .length(8, { message: 'Placa deve ter exatamente 8 caracteres.' }),


  selling_date: z.coerce.date()
    .min(minSellingDate, { message: 'Data de venda deve ser a partir de 01/01/2020.' })
    .max(maxDate, { message: 'Data de venda não pode ser no futuro.' })
    .nullish(),

  selling_price: z.coerce.number()
    .gte(1000, { message: 'Preço de venda deve ser maior ou igual a R$ 1.000,00.' })
    .lte(500000, { message: 'Preço de venda deve ser menor ou igual a R$ 5.000.000,00.' })
    .nullish(),
})

export default Cars
