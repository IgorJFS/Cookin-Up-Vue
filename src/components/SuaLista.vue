<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import TagCard from './TagCard.vue'

export default defineComponent({
  name: 'SuaLista',
  components: {
    TagCard,
  },
  props: {
    ingredients: { type: Array as PropType<string[]>, required: true },
  },
})
</script>

<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto"> Sua lista: </span>

    <ul v-if="ingredients.length" class="ingredientes-sua-lista">
      <li v-for="ingredient in ingredients" :key="ingredient">
        <TagCard :texto="ingredient" :ativa="true" />
      </li>
    </ul>

    <p v-else class="paragrafo lista-vazia">
      <img src="../assets/images/icones/lista-vazia.svg" alt="Ícone de pesquisa" />
      Sua lista está vazia, selecione ingredientes para começar.
    </p>
  </section>
</template>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}
</style>
