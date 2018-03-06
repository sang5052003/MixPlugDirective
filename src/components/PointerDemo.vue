<template>
  <div>
    <p>{{msg}}</p>
    <pointer-canvas/>
    <pointer-log/>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'demo',
        eventLog: []
      }
    }
  }
</script>

<style scoped>

</style>
