const {validationMixin} = window.vuelidate
const {required, maxLength, email, minLength, between, numeric} = window.validators


var user_form = new Vue({

    el: '#user-form',
    mixins: [validationMixin],
    validations: {

        basicInfo: {
            nickName: {required, maxLength: maxLength(10)},
            sex: null,
            requiredSex: null,
            birthday: null,
            wechatNumber: {required},
            qqNumber: {numeric, maxLength: maxLength(11)},
            location: null,
            homeTown: null
        },
        universityInfo: {
            universityName: null,
            college: null,
            major: null
        },
        moreInfo: {
            constellation: null,
            personality: null,
            lovedMusic: null,
            lovedMovieOrSeries: null,
            lovedFood: null,
            travedPlace: null,
            hoobie: null
        }

        // name: {required, maxLength: maxLength(10)},
        // email: {required, email},
        // select: {required},
        // checkbox: {required}
    },

    data: {

        menu: false,
        sexItems: [
            {sex: 'male', text: '男'},
            {sex: 'female', text: '女'}
        ],

        states: [
            {province: 'Shanghai', text: '上海'}, {province: 'Beijing', text: '北京'}, {
                province: 'Tianjin',
                text: '天津'
            }, {province: 'Chongqing', text: '重庆'}, {province: 'Hebi', text: '河北'}, {
                province: 'Henan',
                text: '河南'
            }, {province: 'Yunnan', text: '云南'}, {province: 'Liaoning', text: '辽宁'}, {
                province: 'Heilongjiang',
                text: '黑龙江'
            }, {province: 'Hunan', text: '湖南'}, {province: 'Anhui', text: '安徽'}, {
                province: 'Shandong',
                text: '山东'
            }, {province: 'Xinjiang', text: '新疆'}, {province: 'Shanxi', text: '山西'}, {
                province: 'Jiangsu',
                text: '江苏'
            }, {province: 'Zhejiang', text: '浙江'}, {province: 'Jiangxi', text: '江西'}, {
                province: 'Hubei',
                text: '湖北'
            }, {province: 'Guangxi', text: '广西'}, {province: 'Gansu', text: '甘肃'}, {
                province: 'Shanxi',
                text: '陕西'
            }, {province: 'Neimenggu', text: '内蒙古'}, {province: 'Jilin', text: '吉林'}, {
                province: 'Fujian',
                text: '福建'
            }, {province: 'Guizhou', text: '贵州'}, {province: 'Guangdong', text: '广东'}, {
                province: 'Qinghai',
                text: '青海'
            }, {province: 'Xizang', text: '西藏'}, {province: 'Sichuan', text: '四川'}, {
                province: 'Ningxia',
                text: '宁夏'
            }, {province: 'Hainan', text: '海南'}, {province: 'Taiwan', text: '台湾'}, {
                province: 'Xianggang',
                text: '香港'
            }, {province: 'Aomen', text: '澳门'}
        ],

        constellationSelect: [
            {constellation: 'baiyang', text: '白羊座'},
            {constellation: 'jinniu', text: '金牛座'},
            {constellation: 'shuangzi', text: '双子座'},
            {constellation: 'juxie', text: '巨蟹座'},
            {constellation: 'shizi', text: '狮子座'},
            {constellation: 'chunv', text: '处女座'},
            {constellation: 'tiancheng', text: '天秤座'},
            {constellation: 'tianxie', text: '天蝎座'},
            {constellation: 'sheshou', text: '射手座'},
            {constellation: 'mojie', text: '摩羯座'},
            {constellation: 'shuipin', text: '水瓶座'},
            {constellation: 'shuangyu', text: '双鱼座'}
        ],
        userId: null,
        basicInfo: {
            nickName: null,
            sex: null,
            requiredSex: null,
            birthday: null,
            wechatNumber: null,
            qqNumber: null,
            location: '',
            homeTown: ''
        },

        universityInfo: {
            universityName: "上海大学",
            college: null,
            major: null
        },
        moreInfo: {
            // constellation: null,
            personality: null,
            lovedMusic: null,
            lovedMovieOrSeries: null,
            lovedFood: null,
            travedPlace: null,
            hoobie: null
        }
    },

    mounted() {
        popUp: {

            this.userId = 1
            let responseData
            let param = new URLSearchParams()
            // console.log(this.userId)
            param.append('userID', this.userId)
            // axios.get('http://192.168.2.216:3000/wechatsite/getinfo')
            axios({
                method: 'post',
                url: 'http://192.168.2.216:3000/wechatsite/getuserinfo',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                data: param
            }).then(function (response) {
                // responseData = response[request]
                responseData = response.request.response
                responseData = JSON.parse(responseData)
                jsonTransFromServerToWeb(responseData, user_form.basicInfo, user_form.universityInfo, user_form.moreInfo);
                console.log(responseData)
                console.log(user_form.basicInfo)

            }).catch(function (error) {
                console.log(error)
            })

        }
    },


    computed: {
        nickNameErrors() {
            const errors = []
            if (!this.$v.basicInfo.nickName.$dirty) return errors
            !this.$v.basicInfo.nickName.maxLength && errors.push('昵称最长10位')
            !this.$v.basicInfo.nickName.required && errors.push('请填写昵称')
            return errors
        },

        wechatNumberErrors() {
            const errors = []
            if (!this.$v.basicInfo.wechatNumber.$dirty) return errors
            !this.$v.basicInfo.wechatNumber.required && errors.push('请填写微信号')
            return errors
        },

        qqNumberErrors() {
            const errors = []
            if (!this.$v.basicInfo.qqNumber.$dirty) return errors
            !this.$v.basicInfo.qqNumber.numeric && errors.push('请正确填写QQ号')
            !this.$v.basicInfo.qqNumber.maxLength && errors.push('QQ号最长11位')
            return errors
        },

        locationErrors() {

        },

        homeTownErrors() {

        },

        universityNameErrors() {

        },

        collegeErrors() {

        },

        majorErrors() {

        },

        personalityErrors() {

        },

        lovedMusicErrors() {

        },

        lovedFoodErrors() {

        },
        travedPlaceErrors() {

        },
        hoobieErrors() {

        },
        lovedMovieOrSeriesErrors() {

        }
        /********************checkErrorExample*************************
         checkboxErrors() {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.required && errors.push('You must agree to continue!')
            return errors
        },
         selectErrors() {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
        },
         nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
         emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        }
         ***********************checkErrorExample********************/
    },

    methods: {
        submit() {

            // this.$v.$touch()
            // console.log('666')
            // console.log(this.$v.$invalid())
            user_form.userId = 5
            let param = new URLSearchParams()
            let userInfo = {}
            // console.log(user_form.basicInfo)
            // let parsedJson = JSON.stringify(parJson)
            // params.append('transData', parsedJson)
            jsonTransFromWebToServer(userInfo, user_form.basicInfo, user_form.universityInfo, user_form.moreInfo, user_form.userId)
            param.append('userID', user_form.userId)
            console.log(userInfo)
            userInfo = JSON.stringify(userInfo)
            param.append("transferUserInfo", userInfo)
            axios({
                method: 'post',
                url: 'http://192.168.2.216:3000/wechatsite/saveuserinfo',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                data: param
            }).then(function (response) {

                console.log(response)

            }).catch(function (error) {
                console.log(error)
            })
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
        save(date) {
            this.$refs.menu.save(this.basicInfo.birthday)
        }
    },

    watch: {
        menu(val) {
            val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
        }
    }

})


function jsonTransFromServerToWeb(jsonFromWeb, jsonBasicInfo, jsonUniversityInfo, jsonMoreInfo) {

    jsonBasicInfo.nickName = jsonFromWeb.nick_name
    jsonBasicInfo.sex = jsonFromWeb.sex
    jsonBasicInfo.requiredSex = jsonFromWeb.required_sex
    jsonBasicInfo.birthday = jsonFromWeb.birthday
    jsonBasicInfo.wechatNumber = jsonFromWeb.wechat_number
    jsonBasicInfo.qqNumber = jsonFromWeb.qq_number
    jsonBasicInfo.location = jsonFromWeb.location
    jsonBasicInfo.homeTown = jsonFromWeb.home_town
    /*---------------------------*/
    jsonUniversityInfo.universityName = jsonFromWeb.university_name
    jsonUniversityInfo.college = jsonFromWeb.college
    jsonUniversityInfo.major = jsonFromWeb.major
    /*---------------------------*/
    jsonMoreInfo.constellation = jsonFromWeb.constellation
    jsonMoreInfo.personality = jsonFromWeb.personality
    jsonMoreInfo.lovedMusic = jsonFromWeb.loved_music
    jsonMoreInfo.lovedMovieOrSeries = jsonFromWeb.loved_movie_or_series
    jsonMoreInfo.lovedFood = jsonFromWeb.loved_food
    jsonMoreInfo.travedPlace = jsonFromWeb.traved_place
    jsonMoreInfo.hoobie = jsonFromWeb.hoobie
}

function jsonTransFromWebToServer(jsonFromWeb, jsonBasicInfo, jsonUniversityInfo, jsonMoreInfo, userId) {

    jsonFromWeb.user_no = userId
    /*---------------------------*/
    jsonFromWeb.nick_name = jsonBasicInfo.nickName
    jsonFromWeb.sex = jsonBasicInfo.sex
    jsonFromWeb.required_sex = jsonBasicInfo.requiredSex
    jsonFromWeb.birthday = jsonBasicInfo.birthday
    jsonFromWeb.wechat_number = jsonBasicInfo.wechatNumber
    jsonFromWeb.qq_number = jsonBasicInfo.qqNumber
    jsonFromWeb.location = jsonBasicInfo.location
    jsonFromWeb.home_town = jsonBasicInfo.homeTown
    /*---------------------------*/
    jsonFromWeb.university_name = jsonUniversityInfo.universityName
    jsonFromWeb.college = jsonUniversityInfo.college
    jsonFromWeb.major = jsonUniversityInfo.major
    /*---------------------------*/
    jsonFromWeb.constellation = jsonMoreInfo.constellation
    jsonFromWeb.personality = jsonMoreInfo.personality
    jsonFromWeb.loved_music = jsonMoreInfo.lovedMusic
    jsonFromWeb.loved_movie_or_series = jsonMoreInfo.lovedMovieOrSeries
    jsonFromWeb.loved_food = jsonMoreInfo.lovedFood
    jsonFromWeb.traved_place = jsonMoreInfo.travedPlace
    jsonFromWeb.hoobie = jsonMoreInfo.hoobie
}