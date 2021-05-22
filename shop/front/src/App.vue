<template>
  <div id="app">
    <Header title="my shop"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-if='login_flag'>
      <router-link to='/login'>login</router-link>
    </p>
    <p v-if='!login_flag'>
      <router-link to='/my-info'>my info</router-link>
      <button v-on:click="logout">logout</button>
    </p>
    <router-view :key='$route.fullPath'></router-view>
    <Footer info="tel:02-1111-2222 copyrighted by sl-comp"/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {//하위 컴포넌트 등록
    Header,
    Footer
  },
  data(){
    return{
        login_flag: true  //로그인 상태:true(로그인안된상태) / false(로그인된상태)
    };
  },
  created:function(){//페이지 시작시 실행
    var login_id = sessionStorage.getItem("login_id");
    if(login_id=='' || login_id==null){
      this.login_flag = true;
    }else{
      this.login_flag = false;
    }
  },
  methods:{//메서드 정의
    setFlag:function(flag){
      this.login_flag = flag;
    },
    logout:function(){
      this.login_flag = true;
      sessionStorage.removeItem("login_id");
      sessionStorage.removeItem("type");
      location.href = 'index.html'
    }
  }
}
</script>

<style>
img{
  width:300px;
  height:100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
