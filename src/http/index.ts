import type ICategoria from '@/types/ICategoria'
import type IReceita from '@/types/IReceita'

export async function obterCategorias(): Promise<ICategoria[]> {
  try {
    const resposta = await fetch(
      'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json',
    )

    const categorias: ICategoria[] = await resposta.json()

    return categorias
  } catch (error) {
    console.error('Erro ao obter categorias:', error)
    throw error
  }
}
export async function obterReceitas(): Promise<IReceita[]> {
  try {
    const resposta = await fetch(
      'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json',
    )

    const receitas: IReceita[] = await resposta.json()

    return receitas
  } catch (error) {
    console.error('Erro ao obter categorias:', error)
    throw error
  }
}
