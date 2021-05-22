<template>
<div>
  <h3>my info</h3>
  id:<input type="text" v-model="m.id" readonly><br />
  pwd:<input type="text" v-model="m.pwd"><br />
  name:<input type="text" v-model="m.name"><br />
  email:<input type="text" v-model="m.email"><br />
  type:<input type="text" v-model="type" readonly><br />
  <button v-on:click="ok">go back</button>
  <button v-on:click="edit">edit</button>
</div>
</template>

<script>
export default{
  name:'MyInfo',
  data(){
		return{
      id:'',
			m:null,
			type:''
		};
	},
  created:function() {
    const self = this;
    self.id = sessionStorage.getItem("login_id");
    this.$axios.get('/members/' + self.id)
      .then(function(res) {
        if (res.data.result) {
          self.m = res.data.m;
          if(res.data.m.type==1){
            self.type='seller';
          }else {
            self.type='consumer';
          }
        } else {
          alert('fail');
        }
      });
  },
	methods:{
    ok:function(){
      location.href = 'index.html';
    },
    edit:function(){
      const form = new URLSearchParams();
			form.append('id', this.m.id);
			form.append('pwd', this.m.pwd);
			form.append('name', this.m.name);
			form.append('email', this.m.email);
			this.$axios.put('/members/'+this.m.id, form)
			.then(function(res){
				if(res.data.result){
					alert('edit success');
          location.href = 'index.html'
				}else{
					alert('fail');
				}
			});
    }
	}
}
</script>
