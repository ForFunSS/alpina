<template>
  <div class="block-header">
    <div class="wrap-header-1">
     <div class="container container-header">
       <div class="mobile-menu">
         <div class="menu" @click="visibleMenu">
           <div class="line"></div>
           <div class="line"></div>
           <div class="line"></div>
         </div>
         <div class="div-cont-menu">
           <div class="div-el">
             <a class="a-link link-obj-work" @click="visibleMenu">
               Объекты, с которыми мы работаем
             </a>
           </div>
           <div class="div-el">
             <a class="a-link link-obj-work" @click="visibleMenu">
               Процесс работы
             </a>
           </div>
           <div class="div-el">
             <a class="a-link link-priem-work" @click="visibleMenu">
               Гарантия
             </a>
           </div>
           <div class="div-el">
             <a class="a-link link-dealers-work" @click="visibleMenu">
               Наши клиенты
             </a>
           </div>
           <div class="div-el">
             <a class="a-link link-cont" @click="visibleMenu">
               Контакты
             </a>
           </div>
           <div class="div-el">
             <a title="Вызвать инженера" @click="$emit('openModal')">Вызвать инженера</a>
           </div>
         </div>
       </div>
       <div class="float-container float-container2 float-container-mobile">
         <div @click="changeTheme()" class="float-theme" :class="{'dark-mode': this.themeStorage}">
           <div class="dot"></div>
         </div>
       </div>
      <div class="header-nav">
        <div class="div-el">
          <a class="a-link link-obj-work">
            Объекты, с которыми мы работаем
          </a>
        </div>
        <div class="div-el">
          <a class="a-link link-proc-work">
            Процесс работы
          </a>
        </div>
        <div class="div-el">
          <a class="a-link link-priem-work">
            Гарантия
          </a>
        </div>
        <div class="div-el">
          <a class="a-link link-dealers-work">
            Наши клиенты
          </a>
        </div>
        <div class="div-el">
          <a class="a-link link-cont">
            Контакты
          </a>
        </div>
      </div>
    </div>
    </div>
    <div class="wrap-header-2">
      <div class="float-container float-container1">
        <div @click="changeTheme()" class="float-theme" :class="{'dark-mode': this.themeStorage}">
          <div class="dot"></div>
        </div>
      </div>
      <div class="container container-header-2">
        <div class="header-cont">
          <div class="div-logo">
            <div class="dt1">
              <img draggable="false" src="../../src/assets/images/logo-head.svg" alt="">
            </div>
            <div class="dt2">
              <div class="cont-el">пн-пт: <b>9:00 - 18:00</b></div>
              <div class="cont-el">сб-вс: <b>выходной</b></div>
            </div>
          </div>
          <div class="cont-data">
            <div class="div-cont-data">
              <div class="text">
                <img draggable="false"  src="../../src/assets/images/ico-location.svg" alt="">
                <adress>
                  г. Тверь,  пр-т Чайковского, д.28/2
                </adress>
              </div>
              <div class="text">
                <img draggable="false"  src="../../src/assets/images/ico-mail-2.svg" alt="">
                <a class="unset-tt" href="mailto:klimat-tver@yandex.ru" title="Написать">
                  klimat-tver@yandex.ru
                </a>
              </div>
            </div>
            <div class="div-cont-data div-cont-data-2">
              <div class="text">
                <img draggable="false"  src="../../src/assets/images/ico-phone-2.svg" alt="">
                <a class="unset-tt link-tel" href="tel:+74822642200" title="Позвонить">
                  +7 (4822) 64-22-00
                </a>
              </div>
              <div class="text">
                <a title="Вызвать инженера" @click="$emit('openModal')">Вызвать инженера</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-header-3">
      <div class="container container-header-3"></div>
    </div>

  </div>
</template>
<script>


export default {
  name: 'blockHeader',
  data(){
    return{
      themeStorage: false
    }
  },
  methods:{
    visibleMenu(){
      document.querySelector('.div-cont-menu').classList.toggle('visible-menu')
    },
    addMenuHidden(){
      let elemMenu = document.querySelectorAll('.div-cont-menu .a-link')
        elemMenu.forEach((el) => {
        el.addEventListener('onclick', function () {
          document.querySelector('.div-cont-menu').classList.toggle('visible-menu')
        })
      })
    },
    changeTheme(){
      if (localStorage.getItem('theme-window') !== "dark-theme"){
        localStorage.setItem('theme-window','dark-theme')
        document.querySelectorAll('.float-theme').forEach((el)=>{
          el.classList.toggle('dark-mode')
        })
      } else {
        localStorage.setItem('theme-window','white-theme')
        // document.querySelector('.float-theme').classList.toggle('dark-mode')
        document.querySelectorAll('.float-theme').forEach((el)=>{
          el.classList.toggle('dark-mode')
        })
      }
      document.querySelector('html').setAttribute('theme', localStorage.getItem('theme-window'));
    },
  },
  mounted() {
    this.addMenuHidden()
    if (localStorage.getItem('theme-window') === "white-theme"){
      this.themeStorage = true;
    }
  }
}
</script>