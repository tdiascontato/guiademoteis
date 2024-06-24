<!--src/components/Header.vue-->
<template>
  <div class="header" @click="closeModalOnOutsideClick">
    <!-- Logo -->
    <div class="logo">
      <img src="/logo_header.png" alt="Guia de Motéis" />
      <hr />
    </div>
    <!-- Cidades -->
    <div class="location-menu">
      <button @click="toggleModal">{{ selectedCity }}</button>
      <img src="/heart_white.png" alt="Menu Icon" @click="toggleModal" class="menu-icon"/>
      <transition name="fade">
        <div v-if="isModalOpen" class="modal">
          <div class="modal-content">
            <ul class="regions">
              <li v-for="(cities, region) in localities" :key="region" @click="selectRegion(region)">
                {{ region }}
              </li>
            </ul>
            <div class="cities">
              <p v-for="(cityArray, region) in citiesInSelectedRegion" :key="region">
                <span v-for="city in cityArray" :key="city">{{ city }}</span>
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- Search -->
    <div class="search-box">
      <p class="p">Busca avançada</p>
      <input class="search" type="text" placeholder="Digite o nome do Motél"/>
    </div>
    <!--    Toggle Mode-->
    <div class="toggle-mode">
      <img src="/darkmode.png" alt="Mudar modo de apresentação" @click="$emit('toggle-mode')" />
    </div>
    <!-- Auth -->
    <div class="auth">
      <p class="signup">Não tem cadastro?</p>
      <div class="login">
        <img src="/heart_white_circle.png" alt="Login Icon" />
        <p class="login_login">Login</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
  background-color: #B00026;
  max-width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo img {
  width: 16rem;
  cursor: pointer;
}

.logo hr {
  height: 2.75rem;
  width: 0.1rem;
  background: #6c0019;
  border: none;
  border-radius: 5rem;
}
/* Menu cidades */
.location-menu {
  position: relative;
  display: flex;
  align-items: center;
}
.menu-icon{
  width: 1rem;
}
.location-menu button, .menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: white;
}

.modal {
  position: absolute;
  top: 3rem;
  left: 0;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  z-index: 1000;
}

.modal-content {
  display: flex;
}

.regions {
  list-style-type: none;
  background: #ccc;
  border-radius: 0.5rem;
  padding: 0;
  margin: 0;
}

.regions li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.regions li:hover {
  text-decoration: underline;
}

.cities {
  background: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: start;

}

.cities span {
  margin: 0.5rem 0;
  display: block;
}

.cities span:hover {
  text-decoration: underline;
  cursor: pointer;
}
/* acabou menu cidades */
.search-box{
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: end;
  color: white;
  margin: 0;
  padding: 0.5rem;
}
.search-box p{
  margin: 0;
  cursor: pointer;
  transition: 0.5s ease;
}
.search-box p:hover{
  text-decoration: underline;
  transition: 0.5s ease;
}
.search {
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  border: none;
  margin: 0;
}
/*toggle mode*/
.toggle-mode{
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
}
.toggle-mode img{
  cursor: pointer;
  width: 2rem;
  height: 2rem;
}
/*Auth*/
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.signup{
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: large;
  color: white;
  cursor: pointer;
}
.login{
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: underline;
  cursor: pointer;
  p{
    text-align: center;
    font-size: large;
    margin: 0;
  }
  img{
    width: 2rem;
    height: 2rem;
  }
}
.login:hover{
  color: white;
}
/*transition smooth*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { localities } from '@/assets/api.js'

const isModalOpen = ref(false)
const selectedCity = ref('Rio de Janeiro')
const selectedRegion = ref('Sudeste')
const citiesInSelectedRegion = ref(localities[selectedRegion.value])

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const selectRegion = (region) => {
  selectedRegion.value = region
  citiesInSelectedRegion.value = localities[region]
}

const closeModalOnOutsideClick = (event) => {
  if (!event.target.closest('.location-menu') && isModalOpen.value) {
    isModalOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeModalOnOutsideClick)
})
</script>