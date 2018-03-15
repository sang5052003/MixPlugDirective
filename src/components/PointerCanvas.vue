<template>
  <!--<div class="event-source" @pointermove="handlePointerMove">-->
    <!--<p>Click and drag in here.</p>-->
  <!--</div>-->
  <div class="event-source" v-pointer:pointermove="handlePointerMove">
    <p>Click and drag in here.</p>
    <input id="inputId" @click="func" :value="valueData"/>
  </div>

</template>

<script>
    export default {
      data: function() {
        return {
          inputId: 'kk',
          valueData: "",
          num: 0
        }
      },
      created: function() {
        // this.inputId.value = 500;
      },
      // This pushes events to the parent's log
      // See also: the pointer-demo component
      methods: {
        handlePointerMove: function (ev) {
          // this.valueData = ev.toString();
          this.$parent.$data.eventLog.push(ev);
        },
        func: function ($event) {
          this.valueData = this.num++;
          console.log($event);
          console.log($event.target);
          console.log($event.target.value);
        }
      }
    }
</script>

<style scoped>

</style>
