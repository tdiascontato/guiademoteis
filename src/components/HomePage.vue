<!-- src/components/HomePage.vue -->
<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import {ref} from "vue";

const moteis_swiper = ref(['/slide1.png', '/slide2.png', '/slide3.png', '/slide2.png',]);

</script>

<template>
  <main class="principal">
    <!-- Section Inicial -->
    <section class="first_modal">
      <section class="schedule_card">
        <div class="title_card_principal">
          <p>Mirante Hotél</p>
          <div class="hearts_title_principal">
            <img src="/heart_red.png" alt="Corações" />
            <p>2998</p>
          </div>
        </div>
        <div class="checkin_checkout_principal">
          <p>Check-in</p>
          <p>Check-Out</p>
        </div>
        <img class="calender_image" src="/calendario_example.png" alt="Exemplo de calendário para agendamentos" />
        <div class="button_app">
          <p>R$124</p>
          <div class="app_access">
            <p>Agende no</p>
            <p>App</p>
            <img src="/motelgoicon.png" alt="App Motel Go" />
          </div>
        </div>
      </section>

      <section class="card-images">
        <div class="go_app">
          <p>PROMOÇÃO VÁLIDA</p>
          <p>PELO APP</p>
          <img src="/motelgoicon.png" alt="Motél Go App" />
        </div>
        <img class="image_card_principal" src="/mirante.png" alt="Anúncio de Motél parceiro" />
      </section>
    </section>

    <!-- Section Destaques -->
    <section class="second_modal">
      <div class="title_destaques">
        <img src="/heart_lying.png" alt="Ícone Heart Lying" class="img_destaques">
        <h1 class="txt_destaques">DESTAQUES NO RIO DE JANEIRO</h1>
      </div>

      <Swiper
          :modules="[EffectCoverflow, Autoplay]"
          effect="coverflow"
          :grabCursor="false"
          :centeredSlides="true"
          slidesPerView="3"
          :coverflow-effect="{ depth: 0, rotate: 10, modifier: 1, scale: 1.02 }"
          :autoplay="{ delay: 3000, disableOnInteraction: true, }"
          :spaceBetween="50"
          :loop="true"
          :initialSlide="3"
          class="slider-container"
      >
        <SwiperSlide class="slider-card" v-for="motel in moteis_swiper" :key="motel">
          <img :src="motel" alt="Guia de Motéis" />
        </SwiperSlide>
      </Swiper>

    </section>

    <div class="indicacoes">
      <img src="/logo_indicacoes.png" alt="Guia de Motéis" />
      <h1>MOTÉIS INDICADOS NO RIO DE JANEIRO</h1>
    </div>

    <div class="indicacoes-patrocinio">
      <aside class="motel_side">
        <div v-for="motel in moteis_swiper">
          <img :src="motel" alt="Guia de Motéis" />
        </div>
      </aside>

      <div class="patrocinio_side">
        <div class="mirante">
          <div class="go_app">
            <p>PROMOÇÃO VÁLIDA</p>
            <p>PELO APP</p>
            <img src="/motelgoicon.png" alt="Motél Go App" />
          </div>
          <img src="/mirante.png" alt="Mirante Hotel" />
        </div>
        <div class="mirante">
          <div class="go_app">
            <p>PROMOÇÃO VÁLIDA</p>
            <p>PELO APP</p>
            <img src="/motelgoicon.png" alt="Motél Go App" />
          </div>
          <img src="/mirante.png" alt="Mirante Hotel" />
        </div>
      </div>

    </div>

    <div class="semanal">
      <img src="/logo_indicacoes.png" alt="Guia de Motéis" />
      <h1>INDICAÇÕES DA SEMANA</h1>
    </div>

    <section class="aside_footer">

      <div class="cards_semanal">
        <div class="go_app">
          <p>PROMOÇÃO VÁLIDA</p>
          <p>PELO APP</p>
          <img src="/motelgoicon.png" alt="Motél Go App" />
        </div>
        <img src="/espelhos.png" alt="Guia de Motéis" />
        <p>    Sabe aquele básico que funciona? A Suíte Top é assim, sua decoração clean unida com itens essenciais como frigobar, ar-condicionado, Wi-Fi e TV, proporcionam experiências incríveis. Além disso, a hidro dá o toque final para momentos de relaxamento a dois.</p>
      </div>

      <div class="cards_semanal">
        <div class="go_app">
          <p>PROMOÇÃO VÁLIDA</p>
          <p>PELO APP</p>
          <img src="/motelgoicon.png" alt="Motél Go App" />
        </div>
        <img src="/piscina.png" alt="Guia de Motéis" />
        <p>    Considerado um dos mais desejados na região, o Letom Motel oferece opções de suítes completas com piscina, teto solar, sauna e até mesmo suítes temáticas. A cozinha funciona 24h e destaca-se por sua culinária italiana, com massas únicas e artesanais.</p>
      </div>

    </section>

    <section class="patrocinio_footer">

      <div class="card_footer">
        <div class="go_app">
          <p>PROMOÇÃO VÁLIDA</p>
          <p>PELO APP</p>
          <img src="/motelgoicon.png" alt="Motél Go App" />
        </div>
        <img src="/dubai.png" alt="Guia de Motéis">
      </div>

      <div class="card_footer">
        <div class="go_app">
          <p>PROMOÇÃO VÁLIDA</p>
          <p>PELO APP</p>
          <img src="/motelgoicon.png" alt="Motél Go App" />
        </div>
        <img src="/footer.png" alt="Guia de Motéis">
      </div>

    </section>

  </main>
</template>

<style scoped>
/**********************Principal****************************/
.principal {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;
}
/**********************Principal****************************/

/**********************Indicacoes****************************/
.indicacoes{
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 2rem;
  gap: 1rem;
  img{
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  h1{
    margin: 0;
  }
}

.indicacoes-patrocinio{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  margin: 0;
}
.motel_side{
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  img{
    width: 30rem;
    height: 15rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
}
.patrocinio_side{
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  img{
    width: 30rem;
    height: 28rem;
    cursor: pointer;
  }
}

.semanal{
  display: flex;
  padding-top: 2rem;
  margin: 0;
  align-items: center;
  img{
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
}

.aside_footer{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin: 0;
  gap: 1rem;
}

.cards_semanal, .mirante{
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 41rem;
  img{
    height: 24rem;
    width: 100%;
    cursor: pointer;
  }
  p{
    font-size: large;
    cursor: pointer;
  }
  p:hover{
    text-decoration: underline;
  }
}

.patrocinio_footer{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
}
.card_footer {
  width: 42rem;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
  }
}
/**********************Indicacoes****************************/

/**********************Destaques****************************/
.second_modal {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
}

.title_destaques {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
}
.txt_destaques {
  color: #ED0033;
  cursor: default;
  text-align: center;
}
.img_destaques {
  width: 2rem;
  height: 2rem;
}

.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 18rem;
  max-width: 100%;
  margin: 0;
}
.slider-card {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
}
/* swiper */
.swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 15rem;
}
/**********************Destaques****************************/

/**********************Principal Modal****************************/
.first_modal {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.schedule_card {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.title_card_principal {
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.2rem;
  background: #d9d9d9;
  border-radius: 0.5rem;
  p {
    padding-left: 3rem;
    text-align: center;
    font-size: x-large;
    color: black;
    cursor: pointer;
  }
}

.hearts_title_principal {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 0.3rem;
  cursor: default;
  p {
    text-align: start;
    font-size: medium;
    padding: 0;
    margin: 0;
  }
  img {
    width: 1rem;
    height: 1rem;
  }
}

.checkin_checkout_principal {
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 20rem;
  height: 2.75rem;
  padding: 0.5rem;
  background: #ED0033;
  border-radius: 0.5rem;
  p {
    font-size: large;
    color: white;
    cursor: pointer;
  }
}

.calender_image {
  display: flex;
  width: 20rem;
  padding: 0.5rem;
  height: 17rem;
  cursor: pointer;
}

.button_app {
  display: flex;
  width: 21rem;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  gap: 2rem;
  background: #ED0033;
  transition: 0.5s ease;
  p {
    color: white;
    font-size: xx-large;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .app_access {
    display: flex;
    gap: 0.2rem;
    margin: 0;
    padding: 0.2rem;
    align-items: center;
    justify-content: start;
    background: rgba(247, 255, 154, 0.2);
    border-radius: 0.5rem;
    cursor: pointer;
    animation: pulse 2s infinite;
    p {
      font-size: medium;
    }
    img {
      padding-top: 0.2rem;
      width: 2rem;
      height: 2rem;
    }
  }
}

.button_app:hover {
  transition: 0.5s ease;
  background: #ab0125;
}

/* section a direita */
.card-images {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0;
}

.go_app {
  background: #ED0033;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 7rem;
  height: 7.5rem;
  animation: pulse 2s infinite;
  cursor: pointer;
  transition: 0.5s ease;
  p {
    margin: 0;
    text-align: center;
    font-size: medium;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
}

.go_app:hover {
  transition: 0.5s ease;
  background: #ab0125;
}
.image_card_principal {
  width: 45rem;
  height: 25rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
/**********************Principal Modal****************************/

</style>
