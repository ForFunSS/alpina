<template>
  <div class="wrap-cont5 wrap-cont5-1">
    <div class="container container-dealers-accept">
      <h2 class="center">Мы дилеры</h2>
      <div class="div-line"></div>
      <div class="block-slider">
        <div class="slider-cont">
          <blockSliderDealerElem></blockSliderDealerElem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blockSliderSliderElem from './mainPageComponents/blockSliderDealersElem'

export default {
  name: 'App',
  components: {
    "blockSliderDealerElem": blockSliderSliderElem,
  },
}

</script>