<template>
  <div class="block-accept-elem-slider">
    <a class="swiper-button-prev swiper-button-prev1" @click="prevSlider"></a>
    <a class="swiper-button-next swiper-button-next1" @click="nextSlider"></a>
    <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="34"
        navigation
        :loop="true"
        rewind="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mainSlider"
        :breakpoints="{
          '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
          },
          '768': {
          slidesPerView: 2,
          spaceBetween: 20,
          },
          '1024': {
          slidesPerView: 3,
          spaceBetween: 40,
          },
          '1440': {
          slidesPerView: 4,
          spaceBetween: 50,
          },
        }"
    >
      <template v-for="elem in projecData.projectsWithWorkSlider.projData">
        <swiper-slide>
          <div class="accept-slider">
            <div class="block-elem">
              <div class="div-img">
                <template v-if="elem.videoCover">
                  <img draggable="false" :src="elem.videoCover" alt="Фотография обьекта">
                </template>
                <template v-else>
                  <img draggable="false" :src="elem.sourceImage[0]" alt="Фотография обьекта">
                </template>
              </div>
              <div class="title-text">
                {{ elem.sourceName }}
              </div>
              <div class="title-desc">
                {{ elem.shortDesc }}
              </div>
              <div class="div-link">
                <a @click="showModal" class="btn btn-cube">Подбробнее</a>
                <div style="display: none !important;">
                  <div class="dataContent">
                    <div class="slider-modal">
                      <div class="dt1">
                        <div class="block-img">
                          <div class="swiper swiper-modal">
                            <div class="swiper-wrapper">
                              <template v-if="elem.isVideo">
                                <div class="swiper-slide">
                                  <video class="fone-video" id="video-source-modal" controls="controls" loop>
                                    <source class="video-source" :src="elem.videoSrc" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                                  </video>
                                </div>
                              </template>
                              <template v-for="elemImg in elem.sourceImage">
                                <div class="swiper-slide">
                                  <img :src="elemImg" alt="Картинка проекта">
                                </div>
                              </template>
                            </div>
                            <a class="swiper-button-prev swiper-button-prev2"></a>
                            <a class="swiper-button-next swiper-button-next2"></a>
                          </div>
                        </div>
                      </div>
                      <div class="dt2">
                        <div class="block-title">
                          <h1>{{ elem.sourceName }}</h1>
                        </div>
                        <div class="block-desc">
                          {{ elem.shortDesc }}
                        </div>
                        <div class="full-desc">
                          {{ elem.completeWork }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </template>
    </swiper>
    <div v-show="isModalVisible">
      <Modal
          @close="closeModal"
          class="modal-no-header modal-no-footer modal-projects"
      >
        <template v-slot:body>
          <div id="modal-objects">

          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import Modal from './../../elements/modalElement';

// import Swiper core and required modules
import { A11y, Navigation } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import Swiper2 from "swiper/bundle"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import jsonData from "../../../public/data.json";

// Import Swiper styles
export default {
  data() {
    return {
      projecData: jsonData,
      isModalVisible: false,
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 50
          },

          771: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
      loop: true
      navigation: {
        nextEl: '.swiper-button-next'
        prevEl: '.swiper-button-prev'
      }
      return
    };
    const onSlideChange = () => {
      // console.log('slide change');
      return
    };
    const swiperUpdate = () => {
      swiperInstance.value.update();
      // console.log('swiperInstanceUpdate')
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [ A11y, Navigation],
    };
  },
  methods:{
    // nextSlider(){
    //   let next = document.querySelectorAll('.mainSlider .swiper-button-next')
    //   next[next.length - 1].click();
    // },
    // prevSlider(){
    //   let prev = document.querySelectorAll('.mainSlider .swiper-button-prev')
    //   prev[prev.length - 1].click();
    // },
    nextSlider(){
      document.querySelector('.block-accept-elem-slider .swiper .swiper-button-next').click();
    },
    prevSlider(){
      document.querySelector('.block-accept-elem-slider .swiper .swiper-button-prev').click();
    },
    nextSliderModal(){
      const swiper = document.querySelector('.swiper-modal').swiper;
      swiper.slideNext();
    },
    prevSliderModal(){
      const swiper = document.querySelector('.swiper-modal').swiper;
      swiper.slideNext();
    },
    showModal(){
      this.isModalVisible = true
      setTimeout(function () {
        document.querySelector('#modal-objects #video-source-modal').setAttribute('autoplay','')
      }, 2000);
    },
    closeModal() {
      this.isModalVisible = false
      document.querySelector('#modal-objects').innerHTML = "";
    },
    starting(){
      const btnMass = document.querySelectorAll('.accept-slider .div-link .btn');
      btnMass.forEach(element => {
        element.addEventListener("click",function (){
          document.querySelector('#modal-objects').innerHTML = "";
          document.querySelector('#modal-objects').prepend(this.nextSibling.firstChild.cloneNode(true));
          const swiperTime = new Swiper2('.swiper-modal', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        })
      })
    },
  },
  mounted() {
    this.starting()
  },
};
</script>