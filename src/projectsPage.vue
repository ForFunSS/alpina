<template>
  <div class="wrap-cont4 wrap-cont4-1 div-proj-header">
    <div class="container">
      <div class="div-logo">
        <div class="div-img">
          <a href="/">
            <img class="invert-img-white" draggable="false" src="../src/assets/images/footer-text-logo.svg"  alt="">
          </a>
        </div>
        <div class="div-desc">
          Более 100 объектов <br>
          сдали под ключ
        </div>
      </div>
      <div class="float-container float-container2 float-cont3">
        <div @click="changeTheme()" class="float-theme" :class="{'dark-mode': this.themeStorage}">
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="wrap-cont4 wrap-cont4-`1">
    <h2 class="center">Обьекты, которые мы сдали</h2>
    <div class="div-line"></div>
    <div class="mobile-toggle">
      <a @click="changeVision">
        Переключить отображение элементов
      </a>
    </div>
    <div class="container">
      <div class="block-accept-elem-slider block-acc-slider2" :class="{ 'version-row':  versionClass == 'version-row'}">
        <div class="items-cont">
          <template  v-for="elem in projecData.projectsWithWorkSlider.projData">
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
                <div class="div-data">
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
                                  <template v-for="elemImg in elem.sourceImage">
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
                                  </template>
                                </div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                              </div>
                            </div>
                          </div>
                          <div class="dt2">
                            <div class="block-title">
                              <h1>{{ elem.sourceName }}</h1>
                            </div>
                            <div class="block-desc">
                                {{ elem.completeWork }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div v-show="isModalVisible">
        <Modal
            @close="closeModal"
            class="modal-no-header modal-no-footer modal-projects"
        >
          <template v-slot:body>
            <div id="modal-deal-cont">

            </div>
          </template>
        </Modal>
      </div>
    </div>
  </div>
  <blockFooter class="toMainPage"></blockFooter>
</template>
<script>
import Modal from './elements/modalElement';
import blockFooter from "./components/blockFooter"
import jsonData from "../public/data.json";
import Swiper from "swiper/bundle"

import 'swiper/css';


export default {
  components:{
    "blockFooter": blockFooter,
    Modal,
  },
  data() {
    return {
      projecData : jsonData,
      isModalVisible: false,
      versionClass: localStorage.getItem('visuality'),
      themeStorage: false
    }
  },
  methods:{
    showModal(){
      this.isModalVisible = true;
      setTimeout(function () {
        document.querySelector('#modal-deal-cont #video-source-modal').setAttribute('autoplay','')
      }, 2000);
    },
    closeModal() {
      this.isModalVisible = false;
      document.querySelector('#modal-deal-cont').innerHTML = "";
    },
    starting(){
      const btnMass = document.querySelectorAll('.accept-slider .div-link .btn');
      btnMass.forEach(element => {
        element.addEventListener("click",function (){
          document.querySelector('#modal-deal-cont').innerHTML = "";
          document.querySelector('#modal-deal-cont').prepend(this.nextSibling.firstChild.cloneNode(true));
          const swiperTime = new Swiper('.swiper-modal', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        })
      })
      const swiper = new Swiper('.swiper', {
      });
    },
    changeVision(){
      if(localStorage.getItem("visuality") === "version-row"){
        document.querySelector('.block-acc-slider2').classList.remove('version-row')
        document.querySelector('.block-acc-slider2').classList.add('version-column')
        localStorage.setItem('visuality','version-column')
      } else {
        document.querySelector('.block-acc-slider2').classList.add('version-row')
        document.querySelector('.block-acc-slider2').classList.remove('version-column')
        localStorage.setItem('visuality','version-row')

      }
    },
    changeTheme(){
      if (localStorage.getItem('theme-window') !== "dark-theme"){
        localStorage.setItem('theme-window','dark-theme')
        document.querySelector('.float-theme').classList.toggle('dark-mode')
      } else {
        localStorage.setItem('theme-window','white-theme')
        document.querySelector('.float-theme').classList.toggle('dark-mode')
      }
      document.querySelector('html').setAttribute('theme', localStorage.getItem('theme-window'));
    },
  },
  mounted() {
    this.starting()
    if (localStorage.getItem('theme-window') === "white-theme"){
      this.themeStorage = true;
    }
  },
}
</script>
<styles>

</styles>