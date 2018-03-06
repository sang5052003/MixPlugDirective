<template>
  <!--<div class="event-source" @pointermove="handlePointerMove">-->
    <!--<p>Click and drag in here.</p>-->
  <!--</div>-->
  <div class="event-source" v-pointer:pointermove="handlePointerMove">
    <p>Click and drag in here.</p>
  </div>
</template>

<script>
    export default {
      // This pushes events to the parent's log
      // See also: the pointer-demo component
      methods: {
        handlePointerMove: function (ev) {
          this.$parent.$data.eventLog.push(ev);
        }
      }
    }
</script>

<style scoped>

</style>
