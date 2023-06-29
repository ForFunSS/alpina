<template>
  <blockHeader @openModal="visibleModal"></blockHeader>
  <sliderHeader></sliderHeader>
  <blockFloatDotUp></blockFloatDotUp>
  <block1 id="objects-work"></block1>
  <block2 @openModal="visibleModal"></block2>
  <block3 id="priemush-work"></block3>
  <blockFormCallbackPhone></blockFormCallbackPhone>
  <blockSliderProjAccept id="objects-accept"></blockSliderProjAccept>
  <blockSliderDealers id="dealers-work"></blockSliderDealers>
  <blockReadyObjects id="block-contact"></blockReadyObjects>
  <blockModalEngeneer ref="modalVisible"></blockModalEngeneer>

  <blockFooter @openModal="visibleModal"></blockFooter>
</template>
<script>
import mainPage from './components/mainPage.vue'
import blockFloatDotUp from "./components/blockDotFloatUp"
import blockProcessWork from './components/blockProcessWork.vue'
import blockAdvantageComp from './components/mainPageComponents/blockAdvantageComp.vue'
import blockFormCallbackPhone from './components/blockFormCallbackPhone.vue'
import blockSliderProjAccept from './components/blockSliderProjAccept'
import blockSliderDealers from './components/blockSliderDealers'
import blockReadyObject from './components/blockReadyObjects'
import sliderHeader from "@/components/mainPageComponents/SliderHeader"
import blockHeader from "./components/blockHeader"
import blockModalEngeneer from "./components/blockModalEngeneer"
import blockFooter from "./components/blockFooter"

export default {

  name: 'layout',
  data() {
    return {

    };
  },
  components: {
    "block1": mainPage,
    "block2": blockProcessWork,
    "block3": blockAdvantageComp,
    "blockFormCallbackPhone": blockFormCallbackPhone,
    "blockSliderProjAccept": blockSliderProjAccept,
    "blockSliderDealers": blockSliderDealers,
    "blockReadyObjects": blockReadyObject,
    "blockModalEngeneer": blockModalEngeneer,
    "sliderHeader": sliderHeader,
    "blockHeader": blockHeader,
    "blockFloatDotUp": blockFloatDotUp,
    "blockFooter": blockFooter,
  },
  methods:{
    visibleModal(){
      this.$refs.modalVisible.showModal()
    }
  },
}
</script>