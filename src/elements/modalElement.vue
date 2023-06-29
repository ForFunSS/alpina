<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button
          type="button"
          class="btn-close btn-close-modal"
          @click="close"
          data-backdrop="static"
          data-keyboard="false"
      >
        <img src="../assets/images/elems/ico-close-modal.svg" alt="">
        <img class="mobile-close" src="../assets/images/elems/ico-close-modal-adaptive.svg" alt="">
      </button>
      <header class="modal-header">
        <slot name="header">

        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">

        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer">

        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return{
      modalClass:"",
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    watchCloseModal() {
      let localParam = this.$emit
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          localParam('close')
        }
      })
    },
  },
  mounted() {
    this.watchCloseModal()
  }
};
</script>

<style lang="scss">

</style>