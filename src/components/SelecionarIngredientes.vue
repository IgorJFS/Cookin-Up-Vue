<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import type ICategoria from '@/types/ICategoria'
import { obterCategorias } from '@/http/index'
import CardCategoria from './CardCategoria.vue'
import BotaoPrincipal from './BotaoPrincipal.vue'

const categorias = ref<ICategoria[]>([])
const navegarPara = inject('buscarReceitas') as Function

defineOptions({
  name: 'SelecionarIngredientes',
})

const buscarReceitas = () => {
  navegarPara('mostrar')
}

onMounted(async () => {
  try {
    categorias.value = await obterCategorias()
  } catch (error) {
    console.error('Erro ao obter categorias:', error)
    throw error
  }
})
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria :categoria="categoria" />
      </li>
    </ul>

    <p style="color: red" class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
    <BotaoPrincipal texto="Buscar receitas!" @click="buscarReceitas" />
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
