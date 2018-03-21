var bottom = new Vue({
    el: '#bottom',
    data() {
        return {
            show: 'sign-up',
            userIdentity: 1,
            responseParam: 666
        }
    },

    mounted() {
        getWechatInfo: {
            let responseData
            axios({
                method: 'get',
                url: 'https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            }).then(function(response){
                responseData = response.request.response
                // bottom.responseParam = responseData
                console.log(responseData)
            })
        }
    },

    method: {
        hideBottomBar() {
            console.log('666')
        }
    }

})
