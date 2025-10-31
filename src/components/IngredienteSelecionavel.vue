<script lang="ts">
import TagCard from './TagCard.vue'

export default {
  components: {
    TagCard,
  },
  props: {
    ingrediente: { type: String, required: true },
  },
  data() {
    return {
      selecionado: false,
    }
  },
  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado

      if (this.selecionado) {
        this.$emit('adicionar', this.ingrediente)
      } else {
        this.$emit('remover', this.ingrediente)
      }
    },
  },
  emits: ['adicionar', 'remover'],
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
