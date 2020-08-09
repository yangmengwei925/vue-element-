<!--
 * @Author: your name
 * @Date: 2020-07-20 20:17:29
 * @LastEditTime: 2020-07-23 08:47:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uic:\Users\925423\Desktop\vue-element-admin - 副本\src\views\components-demo\sticky.vue
--> 
<template>
  <div class="wrap">
     <header>
    123
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: '',
  components: {  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
 *{
   margin: 0;
   padding: 0;
   list-style: none;
 }
.wrap{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header{
  width:100%;
  height:300px;

}
main{
  flex:1;
  overflow: auto;
}
footer{
  width:100%;
  height: 100px;
}
</style>
