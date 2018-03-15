<template>
  <div>
    <p>{{msg}}</p>
    <p>ref : {{ref}}</p>
    <p>ref2 : {{ref2}}</p>
    <p>ref3 : {{ref3}}</p>
    <button @click="chainFunc">btn</button>
    <button @click="resetFunc">reset btn</button>
  </div>
</template>

<script>
  export default {
    name: "axios-chain-test",
    data: function () {
      return {
        msg: '',
        ref: {data: ''},
        ref2: {data: ''},
        ref3: {data: ''},
      }
    },
    created: function () {
      var me = this;
      // axios({
      //   methods: 'GET',
      //   url: 'http://localhost:3000',
      // }).then(function (res) {
      //   console.log('res ', res);
      //   me.msg = res.data;
      // })
    },
    methods: {
      resetFunc: function () {
        this.ref.data = '';
        this.ref2.data = '';
        this.ref3.data = '';
      },
      chainFunc: function () {
        var me = this;

        let url = 'http://localhost:3000/api1';
        let url2 = 'http://localhost:3000/api2';
        let refCb = me.makeGetCallback(me.ref);
        let ref2Cb = me.makeGetCallback(me.ref2);
        let ref3Cb = me.makeGetCallback(me.ref3);
        me.axiosGet(url, {}, refCb)()
          .then(me.axiosGet(url2, {}, ref2Cb)())
          .then(me.axiosGet(url2, {}, ref3Cb)());
      },
      makeGetCallback: function (param) {
        return function(res){
          param.data = res.data;
        };
      },
      axiosGet(url, params, next) {
        var me = this;
        return function() {
          return axios({
            methods: 'GET',
            url: url,
            params: params
          }).then(function (res) {

            console.log(res);
            if(next) {
              next(res);
            }

          }).catch(function (err) {
            console.log('err : ', err);
          });
        }
      }
    }

  }
</script>

<style scoped>

</style>
