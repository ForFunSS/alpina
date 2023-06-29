<template>
  <div class="elem-modal-preview">
    <div class="div-img">
      <img draggable="false"  :src="this.sourceImg" alt="">
    </div>
    <div class="float-text">
      {{ this.sourceName }}
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      sourceImg: String,
      sourceName: String,
    },
    return:{

    }
  }
</script>