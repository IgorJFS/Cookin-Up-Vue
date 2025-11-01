<script setup lang="ts">
import { ref } from 'vue'
import TagCard from './TagCard.vue'
import { useIngredientes } from '@/composables/useIngredientes'

const props = defineProps<{
  ingrediente: string
}>()
const { adicionarIngrediente, removerIngrediente } = useIngredientes()
const selecionado = ref(false)
const aoClicar = () => {
  selecionado.value = !selecionado.value

  if (selecionado.value) {
    adicionarIngrediente(props.ingrediente)
  } else {
    removerIngrediente(props.ingrediente)
  }
}
</script>
<template>
  <button
    class="ingrediente"
    @click="aoClicar()"
    :aria-label="`Adicionar ${ingrediente} ao cardápio`"
    :aria-pressed="selecionado"
  >
    <TagCard :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
