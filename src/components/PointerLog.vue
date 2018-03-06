<template>
  <ul>
    <li v-for="event in eventLog">{{ event }}</li>
  </ul>
</template>

<script>
    export default {
      computed: {
        eventLog: function() {
          let logs = this.$parent.$data.eventLog;

          return logs.filter(function(log, idx) {
            return idx >= logs.length - 3;
          });
        }
      }
    }
</script>

<style scoped>

</style>
