<script setup lang="ts">
import { ref, provide, type Ref } from 'vue'
import SelecionarIngredientes from './SelecionarIngredientes.vue'
import SuaLista from './SuaLista.vue'
import { provideIngredientes } from '@/composables/useIngredientes'
import MostrarReceitas from './MostrarReceitas.vue'

type Pagina = 'selecionar' | 'mostrar'

const conteudo: Ref<Pagina> = ref('selecionar')

const buscarReceitas = (pagina: Pagina) => {
  conteudo.value = pagina
}

provide('buscarReceitas', buscarReceitas)

const { ingredients } = provideIngredientes()
</script>
<template>
  <main class="conteudo-principal">
    <SuaLista :ingredients="ingredients" />
    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes v-if="conteudo === 'selecionar'" />
      <MostrarReceitas
        v-else-if="conteudo === 'mostrar'"
        @editar-receitas="buscarReceitas('selecionar')"
        :ingredientes="ingredients"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
