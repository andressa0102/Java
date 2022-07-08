export interface ICarddados {
    dados: {
        id: number,
        nome: string,
        data: string,
        titulo: string,
        mensagem: string,
        topico: {
            id: number,
            item: string
        }[]
    }
}