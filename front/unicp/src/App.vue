<template>

  <div id="app">
    <!--<div>-->
    <!--<router-link to="/wechat_interface">首页</router-link>-->
    <!--|-->
    <!--<router-link :to="{name:'da1', params:{userName:'Yang', id:'888'}}">大屌</router-link>-->
    <!--|-->
    <!--<router-link to="/yang">杨大调</router-link>-->
    <!--</div>-->
    <v-card flat>
      <router-view/>
    </v-card>
    <!--<router-view name="left"/>-->
    <!--<router-view name="right"/>-->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
