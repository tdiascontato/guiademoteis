<!-- src/components/LandingPage.vue -->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { ref } from 'vue';

const moteis_swiper = ref(['/slide1.png', '/slide2.png', '/slide3.png', '/slide2.png']);
const faqs = ref({
  "Como funciona o guia de motéis go?": "O guia de motéis go é o aplicativo de reservas do guia de motéis. se quiser ir agora, você consegue ver em tempo real as suítes disponíveis nos motéis mais próximos, fazer sua reserva alguns minutos antes e, ao chegar no motel, a suíte vai estar prontinha te esperando. quer ir outro dia? sem problemas! você pode agendar a reserva com antecedência também na opção ir outro dia.",
  "Como reservar?": "simples! decidiu ir agora? escolha a opção ir agora, veja a lista de suítes disponíveis, escolha uma delas e o período de hospedagem e não deixe de ler todas as informações e regras da reserva. em seguida, adicione os dados do seu cartão de crédito para o pagamento da taxa de serviço, clique no botão RESERVAR E IR, e pronto! Rapidinho você recebe a confirmação no app e por e-mail também. ao chegar no motel, informe sua reserva guia de motéis go na recepção e aproveite! está programando uma data especial e quer reservar com antecedência? escolha a opção ir outro dia, selecione a região, tipo de reserva (pernoite, day-use ou diária), a data da hospedagem e voilá! vai aparecer a lista dos motéis para escolher. ah, na maioria deles ainda é possível incluir experiências e decorações especiais pra tornar tudo ainda melhor! :)",
  "Quais são as formas de pagamento disponíveis?": "se você quiser ir agora, os pagamentos são realizados de forma online via cartão de crédito.",
  "Qual o tempo de tolerância para chegar?": "Qquando a tolerância de deslocamento esgotar, você ainda poderá fazer o check-in no motel por + 25 minutos. depois disso, a reserva será cancelada e será cobrada uma taxa de no-show (não comparecimento) automaticamente.",
});
</script>

<template>
  <div class="landing_page">
    <!-- Seção 1 -->
    <section class="section" id="section-1">
      <!-- GIF de fundo -->
      <div class="background-wrapper">
        <img src="/fundo_bunfire.gif" alt="Fundo Animado" class="background-image" />
      </div>

      <!-- Conteúdo textual -->
      <div class="content-overlay_landingpage">
        <div class="content_landingpage">
          <img src="/chapeu.png" alt="Guia de Motéis Go" class="chapeu" />
          <img src="/logo-landingpage.svg" alt="Logo" class="svg-logo" />
          <p>App de reservas do Guia de Motéis</p>
        </div>
      </div>
      <!-- Transição entre Seção 1 e Seção 2 -->
      <img class="transitionone" src="/descontos.png" alt="Descontos Motéis Go!" />
    </section>

    <!-- Seção 2 -->
    <section class="section" id="section-2">
      <div class="left_side_left">
        <div class="beneficios_start">
          <div class="ben">
            <img src="/reservar.png"  class="img_logo" alt="Motél Go App" />
            <p>&nbsp;Reserve e consiga uma suíte pronta minutos antes de você sair!</p>
          </div>
          <div class="ben">
            <img src="/pagamento.png" alt="Motél Go App" />
            <p>&nbsp;Escolha sua forma de pagamento! Em até 12x no Cartão ou Faça o PIX!</p>
          </div>
        </div>
        <Swiper
            :modules="[EffectCoverflow, Autoplay]"
            effect="coverflow"
            :grabCursor="false"
            :centeredSlides="true"
            slidesPerView="1"
            :coverflow-effect="{ depth: 0, rotate: 10, modifier: 1, scale: 1.02 }"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :spaceBetween="30"
            :loop="true"
            class="slider-container_lp"
        >
          <SwiperSlide class="slider-card_lp" v-for="motel in moteis_swiper" :key="motel">
            <img :src="motel" alt="Guia de Motéis" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="celular">
        <div class="aplle_google">
          <a v-bind:href="'https://apps.apple.com/br/app/guia-de-mot%C3%A9is-go/id1433946343'" target="_blank">
            <img src="/applestore.png" alt="Apple Store" />
          </a>
          <a v-bind:href="'https://play.google.com/store/apps/details?id=br.com.guiademoteis.go.android&hl=pt_BR'" target="_blank">
            <img src="/googleplay.png" alt="Google Play" />
          </a>

        </div>
        <img class="ceular_bg" src="/celular.png" alt="Motél Go" />
      </div>
      <div class="beneficios_rigth">
        <img src="/hand-Photoroom.png" alt="Móteis Go App" />
      </div>
    </section>

    <!-- Seção 3 -->
    <section class="section" id="section-3">
      <div class="background-wrapper">
        <img src="/gif_pele.gif" alt="Motél Go" class="background-image blur" />

        <div class="background-overlay">

          <div class="calendar_block">
            <div class="calendar_fire">
              <div class="title_fire_calendar">
                <img src="/fire.png" alt="Motél Go">
                <h2>Com 10 selinhos você pode trocar créditos por hospedagem!</h2>
              </div>
              <img class="banner_calendar_fire" src="/calendario.png" alt="Descontos em Motéis Go">
            </div>
            <img class="card_mirante_lp" src="/mirante.png" alt="Mirante Hotel">
          </div>

          <div class="fidelidade">
            <div class="fidelidade_title">
              <img class="chapeu_fidelidade" src="/chapeu.png" alt="Motél Go">
              <img src="/motelgoicon.png" alt="Motél Go" />
              <h2>Go Fidelidade</h2>
            </div>
            <div class="fidelidade_body">
              <div>
                <img src="/newiconmotelgo.png" alt="Motél Go">
                <h3>Reserve no app</h3>
              </div>
              <div>
                <img src="/motelgoicon.png" alt="Motél Go">
                <h3>Junte selos</h3>
              </div>
              <div>
                <img src="/dez.png" alt="Motél Go">
                <h3>Troque por hospedagem</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção 4 -->
    <section class="section" id="section-4">

      <div class="footer">

        <div class="layout_footer">

          <div class="celular">
            <div class="aplle_google">
              <a v-bind:href="'https://apps.apple.com/br/app/guia-de-mot%C3%A9is-go/id1433946343'" target="_blank">
                <img src="/applestore.png" alt="Apple Store" />
              </a>
              <a v-bind:href="'https://play.google.com/store/apps/details?id=br.com.guiademoteis.go.android&hl=pt_BR'" target="_blank">
                <img src="/googleplay.png" alt="Google Play" />
              </a>
            </div>
            <img class="ceular_bg" src="/celular.png" alt="Motél Go" />
          </div>

          <div class="column_faq">
            <div class="faq">
              <div class="faq_divs" v-for="(faq_value, faq_title) in faqs" :key="faq_title">
                <h3>{{ faq_title }}</h3>
                <p>{{ faq_value }}</p>
              </div>
            </div>
            <div class="redes_finais">
              <a v-bind:href="'https://apps.apple.com/br/app/guia-de-mot%C3%A9is-go/id1433946343'" target="_blank">
                <img src="/applestore.png" alt="Apple Store" />
              </a>
              <a v-bind:href="'https://play.google.com/store/apps/details?id=br.com.guiademoteis.go.android&hl=pt_BR'" target="_blank">
                <img src="/googleplay.png" alt="Google Play" />
              </a>
              <img src="/chapeu.png" alt="Motél Go Junino">
            </div>
          </div>

        </div>

        <div class="svgs">
          <img src="/logo-landingpage.svg" class="logo-landingpage" alt="Layout Footer" />
          <div class="gran_finale">
            <p>um aplicativo:</p>
            <img src="/guiademoteisfinal.png" alt="Guia de Motéis">
          </div>
        </div>

      </div>

    </section>

    <!-- Imagem sobreposta (fundo_junina) -->
    <div class="fix_header_landingpage">
      <img src="/fundo_junina.png" alt="Imagem Junina" class="headerone_landingpage" />
    </div>
  </div>
</template>




<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.landing_page {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  margin: 0;
  padding: 0;
}

.section {
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*************sections***************/
#section-2 {
  background: #ED0033;
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
}

.left_side_left {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #f5e7e7;
  box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(245, 119, 50, 0.67);
  border-radius: 0.5rem;
  max-height: fit-content;
  max-width: 80%;
  height: 70%;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
}

.beneficios_start {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  padding: 1rem;
  gap: 1rem;
}

.ben {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 12rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(245, 119, 50, 0.37);
  box-shadow: 0.1rem 0 0.1rem 0 rgba(245, 119, 50, 0.67);
  cursor: default;
  animation: pulse 2s infinite alternate ease-in-out;
  img {
    width: 15rem;
    height: 7rem;
    max-height: 7rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.5s ease;
  }
  img:hover{
    scale: 1.02;
    transition: 0.5s ease;
  }
  .img_logo{
    width: 15rem;
    height: 6.5rem;
  }
  p {
    font-size: large;
    text-align: center;
    font-weight: lighter;
    cursor: pointer;
    transition: 0.5s ease;
    margin: 0;
    padding-top: 1rem;
  }
  p:hover{
    color: #fff;
    transition: 0.5s ease;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.02);
  }
}
@keyframes pulse-max {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}

.beneficios_rigth {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  margin: 0;
  right: 0;

  img {
    width: 80%;
    height: 70%;
  }
}

.slider-container_lp {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.slider-card_lp {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    background: none;
  }
}

/* swiper */
.swiper {
  width: 30rem;
  height: 30rem;
  overflow: hidden;
  border-radius: 0.5rem;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.celular{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  Padding: 2rem;
}

.aplle_google{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  cursor: pointer;
  img{
    width: 3rem;
    height: 2rem;
    background: #ED0033;
    border-radius: 0.5rem;
    animation: pulse-max 2s infinite alternate ease-in-out;
  }
}

.ceular_bg{
  z-index: 0;
  width: 10rem;
  height: 20rem;
  position: absolute;
  cursor: pointer;
}

/*************sections***************/
.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background-image.blur {
  filter: blur(10px);
}

.background-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.content-overlay_landingpage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.content_landingpage {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: -2rem;
  color: #ec0000;
  width: 47rem;
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  border-radius: 1rem;
}

.chapeu {
  position: absolute;
  transform: translateX(-50%);
  top: -3rem;
  left: 50%;
  width: 7rem;
  height: auto;
}

.svg-logo {
  width: 100%;
  padding-bottom: 1rem;
}

.content_landingpage p {
  font-size: x-large;
  color: #ffffff;
}

.fix_header_landingpage {
  position: fixed;
  top: 0;
  left: -3rem;
  z-index: 300;
  pointer-events: none;
}

.headerone_landingpage {
  width: 20rem;
  height: 15rem;
  transform: rotate(-15deg);
}

.transitionone {
  position: absolute;
  bottom: -5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30rem;
  height: 12rem;
  z-index: 300;
  margin: 0;
  padding: 0;
}
/***********************Section Three************************/
.calendar_block {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2rem;
  position: relative;
  width: 40rem;
  height: 29rem;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 1rem 0 0 1rem;
  border:none;
}
.calendar_fire {
  position: relative;
  z-index: 2;
}
.title_fire_calendar {
  position: absolute;
  display: flex;
  top: -5rem;
  left: -20rem;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0.2rem;
  background: #ED0033;
  border-radius: 0.5rem;
  rotate: -30deg;
  animation: pulse 2s infinite alternate ease-in-out;
  z-index: 2;
  transition: 0.5s ease;
}
.title_fire_calendar img {
  width: 3rem;
  height: 3rem;
  animation: pulse-max 2s infinite alternate ease-in-out;
}
.title_fire_calendar h2 {
  color: #fff;
  font-weight: lighter;
  font-size: large;
  cursor:default;
}
.title_fire_calendar:hover {
  background: #fff;
  transition: 0.5s ease;
}
.title_fire_calendar:hover h2 {
  color: #ED0033;
  transition: 0.5s ease;
}
.banner_calendar_fire {
  width: 15rem;
  height: 15rem;
  position: relative;
  left: -12.5rem;
  top: -7.5rem;
}
.card_mirante_lp {
  width: 40rem;
  height: 30rem;
  position: absolute;
  border:0.1rem white solid;
  z-index: 1;
  box-shadow: 0 0 0.1rem 0.1rem rgba(255, 255, 255, 0.4);
}
.fidelidade {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 2rem 10rem;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 0 1rem 1rem 0;
  border: none;
}
.chapeu_fidelidade{
  position: absolute;
  top: -2rem;
  left: 25%;
  transform: translateX(-50%);
  width: 5rem;
  height: 3rem;
}
.fidelidade_title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  box-shadow: 0 0 0.1rem 0.1rem #cecece;
  width: 20rem;
  height: 5rem;
  border: none;
  border-radius: 0.5rem;
  gap: 1rem;
  cursor: pointer;
  transition: 1s ease;
}
.fidelidade_title img {
  width: 3rem;
  height: 3rem;
}
.fidelidade_title h2 {
  color: #ED0033;
}
.fidelidade_title:hover {
  background: #fff;
  transition: 1s ease-in-out;
}
.fidelidade_body {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: max-content;
  border-radius: 0.5rem;
  gap: 2rem;
}
.fidelidade_body div {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 5rem;
  gap: 3rem;
  padding: 0.5rem;
  background-color: #ED0033;
  border-radius: 0.5rem;
  border: none;
  transition: 1s ease;
  cursor: pointer;
  text-align: center;
}
.fidelidade_body div:hover {
  background: rgba(255, 255, 255, 0.49);
  transition: 1s ease;
}
.fidelidade_body div:hover h3 {
  color: #ED0033;
  transition: 1s ease;
}
.fidelidade_body div img {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #fff;
  border-radius: 50%;
}
.fidelidade_body div h3 {
  color: #fff;
  text-align: center;
}

/* Keyframes */
@keyframes pulse {
  from {
    scale: 1;
  }
  to {
    scale: 1.1;
  }
}

@keyframes pulse-max {
  from {
    scale: 1;
  }
  to {
    scale: 1.2;
  }
}
/***********************Section Three************************/

/***********************Section Four************************/
.footer{
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #6c0019;
}
.layout_footer{
  display: flex;
  align-items: center;
  margin: 0;
  padding: 2rem;
  height: 20rem;

}
.column_faq{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.redes_finais{
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  img{
    width: 5rem;
    height: 3rem;
  }
}
.faq {
  display: flex;
  flex-wrap: wrap;
  width: 45rem;
  height: max-content;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  padding: 0.5rem;
  background: rgba(237, 0, 51, 0.56);
  border-radius: 1rem;
  top:0;
}
.faq_divs{
  width: 20rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  background: black;
  overflow: hidden;
  border-radius: 1rem;
  h3{
    margin: 0;
    color: #ed0033;
    font-weight: bold;
    padding: 0.5rem;
  }
  p{
    margin: 0;
    padding: 0.5rem;
    color: white;
    text-align: justify;
    font-weight: lighter;
    overflow: scroll;
    scrollbar-width: none;
  }
}
.svgs{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 2rem 0;
}
.logo-landingpage{
  width: 15rem;
  height: 5rem;
}
.gran_finale{
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
  p{
    font-size: medium;
    font-weight: bold;
    margin: 0;
    color: #686868;
  }
  img{
    width: 16rem;
    height: 4rem;
  }
}
/***********************Section Four************************/

</style>
