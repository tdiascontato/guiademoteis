<!-- src/App.vue -->
<script setup>
import { useRoute } from 'vue-router';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Subheader from "@/components/Subheader.vue";
import { ref } from 'vue';

const mode = ref('White');
const route = useRoute();

const toggleMode = () => {
  mode.value = mode.value === 'White' ? 'Black' : 'White';
};
</script>

<template>
  <div :class="['Container', mode]">
    <Header v-if="!route.meta.hideHeaderFooter" class="Header" @toggle-mode="toggleMode" />
    <Subheader v-if="!route.meta.hideHeaderFooter" class="Subheader"/>

    <div :class="[route.meta.hideHeaderFooter ? 'MainNoHeaderFooter' : 'Main']">
      <RouterView />
    </div>

    <Footer v-if="!route.meta.hideHeaderFooter" class="Footer"/>
  </div>
</template>

<style scoped>
html, body, .Container {
  height: 100%;
  margin: 0;
  padding: 0;
}

.Container {
  background: #cecece;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.Black {
  background: #1a1414;
  transition: 1s ease-in-out;
}

.White {
  transition: 1s ease-in-out;
  background: #cecece;
}

.Header {
  background-color: #B00026;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.Subheader {
  height: 42px;
  width: 100%;
  position: fixed;
  top: 80px;
  padding-top: 1rem;
  z-index: 999;
}

.Main {
  margin-top: 122px;
  width: 100%;
  flex: 1;
  overflow: auto;
}

.MainNoHeaderFooter {
  width: 100%;
  flex: 1;
  overflow: auto;
}

.Footer {
  background-color: #B00026;
  width: 100%;
  height: 100%;
  bottom: 0;
}
</style>
