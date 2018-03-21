<template>
  <v-jumbotron color="" id="new-user" height="100%">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">一周校园CP</h3>
          <div class="my-3"></div>
          <div class="title">
            你是人间四月天
          </div>
          <div class="title">
            我愿路过全世界，只为遇见你
          </div>
          <div class="title">
            我喜欢你，要不要告诉你
          </div>
          <div class="title">
            大学里
          </div>
          <div class="title">
            总是可以想象着所有的美好
          </div>
          <div class="title">
            课桌间，操场上，榕树下
          </div>
          <div class="title">
            孕育着理想、友情、爱情......
          </div>
          <div class="title">
            大学如此可爱，怎能不让人魂牵梦绕
          </div>
          <div class="my-2"></div>
          <v-btn block
                 color="cyan"
                 dark
                 depressed
          >点击按钮，找到属于你的校园恋情吧
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    name: "new-user",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .title {
    padding-bottom: 7%;
  }
</style>
