<template>
<div>
  <h3>join form</h3>
  id:<input type="text" v-model="id"><br />
  pwd:<input type="password" v-model="pwd"><br />
  name:<input type="text" v-model="name"><br />
  email:<input type="text" v-model="email"><br />
  type:<input type="radio" name="type" value="1" v-model="type">seller
  <input type="radio" name="type" value="2" v-model="type">consumer<br />
  <button v-on:click="join">join</button>
</div>
</template>

<script>
export default{
  name:'Join',
  data(){
		return{
			id:'',
			pwd:'',
			name:'',
			email:'',
			type:''
		};
	},
	methods:{
		join:function(){
			const form = new URLSearchParams();
			form.append('id', this.id);
			form.append('pwd', this.pwd);
			form.append('name', this.name);
			form.append('email', this.email);
			form.append('type', this.type);
			this.$axios.post('/members', form)
			.then(function(res){
				if(res.data.result){
					alert('success');
          location.href = 'index.html'
				}else{
					alert('fail');
				}
			});
		}
	}
}
</script>
