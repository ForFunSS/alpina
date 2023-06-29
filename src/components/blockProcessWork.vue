<template>
  <div class="wrap-cont2" id="process-work">
    <div class="container">
      <h2 class="center">Процесс работы</h2>
      <div class="block-process-work">
        <div class="el" v-for="(elem, index) in dataElem">
          <div class="div-float-number unselect">
            {{ index + 1 }}
          </div>
          <div class="div-main-cont">
            <div class="header-text">
              <div class="desc-text">
                {{ elem.textDesc }}
              </div>
              <div class="desc-img">
                <img draggable="false" :src="elem.sourceImage" alt="">
              </div>
            </div>
            <div class="sub-desc">
              <div class="text">
                {{ elem.fullDesc }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="first-step">
        <div class="div-elems-step">
          <div class="dt dt1">
            <div class="div-text">
              подберём наилучшее <br>
              решение для вас
            </div>
            <div class="elem-after right">
              Инженер бесплатно приедет <br>
              на ваш объект для подробного <br>
              изучения и оценки
            </div>
            <div class="elem-after right">
              Подберем оборудование <br>
              под ваш бюджет и оперативно <br>
              вышлем предложение
            </div>
          </div>
          <div class="dt dt2">
            <div class="div-text div-text-2">
              сделать первый шаг
            </div>
            <a @click="$emit('openModal')" class="btn">
              вызвать инженера
            </a>
          </div>
          <div class="dt dt3">
            <div class="div-text">
              гарантия на оборудование<br>
              и монтаж до 5 лет
            </div>
            <div class="elem-after left">
              Гарантию прописываем в договоре
            </div>
            <div class="elem-after left">
              Имеем собственный сервисно-гарантийный отдел
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="tringle">

    </div>
  </div>
</template>
<script>
import elemPrev from "@/components/mainPageComponents/elementModalPresentation";
import Modal from './../elements/modalElement';
import jsonData from "/public/data.json";

export default {
  components: {
    "elem-prev": elemPrev,
    Modal,
  },
  data() {
    return{
      isModalVisible: false,
      formSubmited: false,
      dataElem: jsonData.dataElemInfo.dataElem,
    }
  },
  methods: {
    submitFormCallback() {
      this.formSubmited = true
    }
  }
}
</script>