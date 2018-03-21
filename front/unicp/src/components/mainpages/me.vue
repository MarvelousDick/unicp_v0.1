<template>
  <div>
    {{$route.params.userClass}}
    <div class="text-xs-center">
      <v-btn round
             color="cyan"
             outline
      >Rounded Button
      </v-btn>
    </div>
  </div>
</template>

<script>
  console.log()
  export default {
    name: "me",
    data() {
      return {
        userClass: null
      }
    }

  }
</script>

<style scoped>
  .button {
    margin-bottom: 10px;
  }
</style>
