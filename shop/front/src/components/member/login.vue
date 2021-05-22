<template>
<div>
  <h3>login form</h3>
  <div>
    <label for='id'>ID</label>
    <input type="text" id='id' v-model='id' />
  </div>
  <div>
    <label for='pwd'>PWD</label>
    <input type="password" id='pwd' v-model='pwd' />
  </div>
  <button v-on:click='login'>login</button>
  <router-link to='/join'>join</router-link>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      id: '',
      pwd: ''
    };
  },
  methods: {
    login: function() {
      const self = this;
      this.$axios.get('/members/' + self.id)
        .then(function(res) {
          if (res.data.result) {
            if (res.data.m == null) {
              alert('not found id')
            } else {
              if (res.data.m.pwd == self.pwd) {
                alert('login success');
                sessionStorage.setItem('type', res.data.m.type);
                sessionStorage.setItem("login_id", self.id);
                self.$parent.setFlag(false);
                var path = '/smain'
                if(res.data.m.type==2){
                  path = 'omain';
                }
                self.$route.push(path);
              } else {
                alert('pwd fail');
              }
            }
          } else {
            alert('fail');
          }
        });
    }
  }
}
</script>
