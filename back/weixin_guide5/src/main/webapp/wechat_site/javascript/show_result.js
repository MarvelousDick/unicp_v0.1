new Vue({
    el: '#app',
    data() {
        return {

            matchingObject: {
                name: "杨铖",
                birthday: '1994-10-10',
                wechatNumber: '420558513',
                university: '上海大学',
                college: '艺术学院',
                major: '工业设计'
            },
        }
    },

    mounted(){
      getMatchingPerson:{
          axios.get('/user?ID=12345')
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });
      }

    },

    methods: {
        next() {
            const active = parseInt(this.active)
            this.active = (active < 2 ? active + 1 : 0).toString()
        }
    }
})