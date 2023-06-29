<template>
  <div class="wrap-cont5">
    <div class="container container-objects-accept">
      <h2 class="center">Обьекты, которые мы сдали</h2>
      <div class="div-line"></div>
      <div class="block-slider">
        <div class="div-a-link">
          <a class="a-link" href="/projects/">посмотреть все объекты </a>
        </div>
        <div class="block-slider">
          <div class="slider-cont">
            <blockSliderProjAccept></blockSliderProjAccept>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blockSliderProjAccept from './mainPageComponents/blockSliderObjects.vue'

export default {
  name: 'App',
  components: {
    "blockSliderProjAccept": blockSliderProjAccept,
  },
}
</script>