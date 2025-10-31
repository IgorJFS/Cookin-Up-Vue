import { ref, provide, inject, type Ref } from 'vue'

const ingredients = ref<string[]>([])

export function provideIngredientes() {
  provide('ingredients', ingredients)

  const adicionarIngrediente = (ingrediente: string) => {
    ingredients.value.push(ingrediente)
  }

  const removerIngrediente = (ingrediente: string) => {
    const index = ingredients.value.indexOf(ingrediente)
    if (index > -1) {
      ingredients.value.splice(index, 1)
    }
  }

  provide('adicionarIngrediente', adicionarIngrediente)
  provide('removerIngrediente', removerIngrediente)

  return { ingredients, adicionarIngrediente, removerIngrediente }
}

export function useIngredientes() {
  const ingredients = inject('ingredients') as Ref<string[]>
  const adicionarIngrediente = inject('adicionarIngrediente') as (ingrediente: string) => void
  const removerIngrediente = inject('removerIngrediente') as (ingrediente: string) => void
  // esses as não estão sendo reclamados pelo TypeScript por agora, talvez seja necessário usar o tipo de retorno
  return { ingredients, adicionarIngrediente, removerIngrediente }
}
//import { ref, provide, inject, type Ref } from 'vue'
//  const ingredients = inject('ingredients') as Ref<string[]>
