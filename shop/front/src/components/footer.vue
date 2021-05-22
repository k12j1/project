<template>
  <div>
    <h1>{{info}}</h1>
    <p>
      footer: bottom text
    </p>
  </div>
</template>

<script>
export default{
  name:'Footer',
  props:{
    info: String
  }
}
</script>

<style>
p{
  margin: 40px 0 0;
}
</style>
