<template>
  <div>
    <h3>{{ID}}`s products</h3>
    <router-link :to='add'>add product</router-link><br />
    <h4 v-if="list.length==0">등록된 상품 없음</h4>
    <table v-if="list.length!=0" border="1">
      <tr>
        <th>num</th>
        <th>name</th>
        <th>price</th>
        <th>amount</th>
      </tr>
      <tr v-for="p in list" :key='p.num'>
        <td>{{p.num}}</td>
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
        <td>{{p.amount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default{
  name:'SMain',
  data(){
    return{
      id:'',
      list:[]
    };
  },
  created:function(){
    const self = this;
    self.id = sessionStorage.getItem("login_id");
    this.$axios.get('/members/' + self.id)
      .then(function(res) {
        if (res.data.result) {
          self.list = res.data.m.prods;
        } else {
          alert('fail');
        }
      });
  }
}
</script>
