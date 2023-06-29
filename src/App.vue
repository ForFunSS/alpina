<template>
  <router-view />
</template>

<style lang="scss">

</style>

<script>
import Modal from './elements/modalElement';

export default {
  name: 'layout',
  components: {
    Modal,
  },
  props:{
    // isModalVisible : String,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  created() {

  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  },
  unmounted() {
    console.clear()
  }
}
</script>