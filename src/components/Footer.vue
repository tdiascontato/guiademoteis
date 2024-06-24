<script setup>
  const nav_footer = ['Conheca outros sites do Guia de Moteis:', 'Bons de Cama', 'Solucoes', 'Contatos', 'Quem somos', 'Premio Guia de Moteis', 'Politica de Pricavidade']
</script>

<template>
  <section class="footer_container">
    <img class="logo_footer" src="/logo_footer_final.png" alt="Guia de Motéis" />
    <nav>
      <div v-for="item in nav_footer">
        <p>{{ item }}</p>
      </div>
    </nav>
  </section>
</template>
<style scoped>
.footer_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ED0033;
  height: max-content;
  margin:0;
  padding: 0;
}

.logo_footer{
  margin: 0;
  padding-top: 1rem;
  width: 12.5rem;
  height: 6.5rem;
  cursor: pointer;
  margin: 0;
}

.footer_container nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #B00026;
  width: 100%;
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  p{
    color: white;
    margin: 0;
    text-align: center;
    cursor: pointer;
  }
  p:hover{
    color: #6c0019;
  }
}
</style>