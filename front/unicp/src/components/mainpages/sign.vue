<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "situation1",
    data(){
      return{
        userIdentity: this.$route.params.userIdentity
      }
    }
    // mounted(){
    //     if(this.userIdentity == 1){
    //       this.$router.push({name:'form', params:{userIdentity:'1'}})
    //     }else if(this.userIdentity == 2){
    //       this.$router.push({name:'newuser', params:{userIdentity:'2'}})
    //     }
    // }
  }
</script>

<style scoped>

</style>
