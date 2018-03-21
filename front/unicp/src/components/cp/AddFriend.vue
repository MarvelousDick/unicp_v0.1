<template>
  <v-jumbotron color="" id="new-user" height="100%">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">你的CP已经匹配成功啦</h3>
          <div class="my-3"></div>
          <div class="title">
            微信号
          </div>
          <div class="title">
            {{wechatNumber}}
          </div>

          <div class="my-2"></div>
          <v-btn block
                 color="cyan"
                 dark
                 depressed
          >点击按钮，复制
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    name: "addfriend",
    data() {
      return {
        wechatNumber: 66666

      }
    }
  }
</script>

<style scoped>
  .title {
    padding-bottom: 7%;
  }
</style>
