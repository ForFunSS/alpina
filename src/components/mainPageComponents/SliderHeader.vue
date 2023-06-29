<template>
  <div class="block-header">
    <div class="flex-slider">
      <div class="header-slider">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="elem-slider-backgr-1">
              <div class="elem-slider elem-slider-1">
                <h2>ООО «АЛЬПИНА» — </h2>
                <div class="div-text">
                  специализируется в поставке, монтаже и сервисе систем вентиляции, кондиционирования, холодоснабжения и отопления для коммерческих и промышленных помещений.
                </div>
                <div class="elems-slider">
                  <div class="elem">
                    <div class="div-img">
                      <img draggable="false"  src="../../assets/images/slider-head/header-slider-1-icon-pencil.svg" alt="icon-pencil">
                    </div>
                    <div class="cont-text">
                      Проектирование
                    </div>
                  </div>
                  <div class="elem">
                    <div class="div-img">
                      <img draggable="false"  src="../../assets/images/slider-head/header-slider-1-icon-car.svg" alt="icon-pencil">
                    </div>
                    <div class="cont-text">
                      Поставка оборудования
                    </div>
                  </div>
                  <div class="elem">
                    <div class="div-img">
                      <img draggable="false"  src="../../assets/images/slider-head/header-slider-1-icon-time.svg" alt="icon-pencil">
                    </div>
                    <div class="cont-text">
                      Монтаж и пусконаладка
                    </div>
                  </div>
                  <div class="elem">
                    <div class="div-img">
                      <img draggable="false"  src="../../assets/images/slider-head/header-slider-1-icon-gears.svg" alt="icon-pencil">
                    </div>
                    <div class="cont-text">
                      Обслуживание и ремонт
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
// import Swiper core and required modules
import { Pagination, A11y, Navigation } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      videoSrc: "/video/montage_video.mp4"
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
      return
    };
    const onSlideChange = () => {
      // console.log('slide change');
      return
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y, Navigation],
    };
  },
  created() {
    if (document.documentElement.clientWidth <= 990){
      this.videoSrc = "/video/montage_video_mobile.mp4"
    }
  }
};
</script>