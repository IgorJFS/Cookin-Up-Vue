<script setup lang="ts">
const props = defineProps({
  texto: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="botao-principal">{{ props.texto }}</button>
</template>

<style scoped>
.botao-principal {
  width: 20rem;
  height: 3.5rem;
  background: var(--coral, #f0633c);
  color: var(--creme, #fffaf3);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
}

.botao-principal:hover {
  filter: brightness(120%);
}
</style>
