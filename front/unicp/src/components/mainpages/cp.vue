<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "cp",
    data() {
      return {
        userIdentity: this.$route.params.userIdentity
      }
    }
  }
</script>

<style scoped>

</style>
