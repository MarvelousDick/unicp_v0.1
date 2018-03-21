<template>
  <v-app id="inspire">
    <div id="content">
      <router-view/>
    </div>
    <v-bottom-nav absolute
                  :value="true"
                  :active.sync="e1"
                  color="cyan"
                  id="bottom-bar">

      <v-btn flat
             color="dark"
             value="sign-up"
             :to="{name:signRoute}">
        <span>报名</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn flat
             color="dark"
             value="result"
             :to="{name:cpRoute}">
        <span>CP</span>
        <v-icon>assignment</v-icon>
      </v-btn>

      <v-btn flat
             color="dark"
             value="me"
             :to="{name:'me'}">
        <span>我</span>
        <v-icon>face</v-icon>
      </v-btn>

    </v-bottom-nav>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        e1: 'recent',
        testVala: '1',
        testValb: '2',
        signRoute: 'newuser',
        cpRoute: 'addfriend',
        meRoute: null,
        userInfo: null
      }
    },
    mounted() {
      getWechatInfo: {
        let dataFromServer = this.$route.query
        let userInfo = dataFromServer["userinfo"]
        this.userInfo = JSON.parse(userInfo)
        // UserInfo is the user information from wechat server
        console.log(this.userInfo)
        // console.log(this.userInfo)
      }
    },
    method: {
      hideBottomBar() {
        console.log('666')
      }
    },
    watch:{

    }
  }
</script>

<style scoped>
  /* This is for documentation purposes and will not be needed in your application */
  html, body {
    height: 100%;
  }

  #content {
    margin-bottom: 15%;
  }

  #bottom-bar {
    /*height: max-content;*/
    height: 500px;
    position: fixed;
    width: 100%;
  }

  a {
    text-decoraction: none;
    width: 33.33%;
    color: black;
  }

</style>
