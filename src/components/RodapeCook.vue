<script setup lang="ts">
const currentDate = new Date().getFullYear()
</script>
<template>
  <footer class="rodape">
    <p>
      &copy; {{ currentDate }} Desenvolvido por mim, IgorJFS | Projeto fictício sem fins lucrativos
    </p>
  </footer>
</template>

<style scoped>
.rodape {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: var(--verde-escuro, #263a29);
}

p {
  font-size: 14px;
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}
</style>
