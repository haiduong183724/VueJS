<template>
  <div class="wrapper">
    <Slidebar></Slidebar>
    <div class="content">
      <Header></Header>
      <Main></Main>
      
    </div>
    <Form/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Slidebar from "@/components/Slidebar.vue";
import Form from "@/components/Form.vue"
import './style/Commin.css';
export default {
  components: { Header, Main, Slidebar,Form},

}
</script>

<style>
 
  .wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    border: 1px solid;
    border-collapse:collapse ;
  }
  .content{
    flex: 1;
    display: flex;
    flex-direction:column;
    height: 100%;
    min-height: 100vh;
  }
</style>
