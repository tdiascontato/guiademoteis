<!--src/components/Subheader.vue-->
<script setup>
  const regioes = ['Todas', 'Centro', 'Zona Sul', 'Zona Norte', 'Zona Oeste', 'Niterói e região', 'Baixada']
</script>

<template>
  <div class="container_subheader">
    <p class="sub-first">Regiões:</p>
    <p v-for="regiao in regioes"> {{ regiao }}</p>
  </div>
</template>

<style scoped>
.container_subheader{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: medium;
  color: #737373;
  background: #d9d9d9;
}
.sub-first{
  margin-right: 1rem;
  color: #ED0033;
  cursor: default;
}
p{
  cursor: pointer;
}
p:hover{
  transition: 0.5s ease;
  color: #ED0033;
}
</style>