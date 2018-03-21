package com.javen.weixin.controller;

import com.javen.model.UserInfo;
import com.javen.model.Users;
import com.javen.weixin.service.WechatInterfaceService;
import com.jfinal.core.Controller;

import java.util.HashMap;
import java.util.Map;

public class WechatInterfaceController extends Controller {

    static WechatInterfaceService service = new WechatInterfaceService();

    public void index() {

        String openID = getSessionAttr("openId");
        Users users = new Users().dao().findByOpenId(openID);

        render("user_interface.html");
//        renderJson(users.toJson());
    }

    public void test(){

        getResponse().addHeader("Access-Control-Allow-Origin", "*");
        Map<String, Object> json = new HashMap<String, Object>();
        json.put("info", "下单成功！ ");
        json.put("status", "1");
        renderJson(json);
    }

    public void form() {
        render("child_pages/user_form.html");
    }

    public void result() {
        render("child_pages/show_result.html");
    }

    public void contact() {
        render("child_pages/contact_us.html");
    }

    //Lower letter is required for method
    public void getinfo() {
        /*---允许跨域---*/
        getResponse().addHeader("Access-Control-Allow-Origin", "*");
        getResponse().addHeader("Access-Control-Allow-Methods", "POST");
        getResponse().addHeader("'Access-Control-Allow-Headers","x-requested-with,content-type");

        String a = getPara("transData");
        String b = getPara("lastName");

        renderText(b + a);
//        renderJson("{\"age\":18}" );
    }

    public void getuserinfo() {
        getResponse().addHeader("Access-Control-Allow-Origin", "*");
        renderJson(service.findById(getParaToInt("userID")));
    }

    public void saveuserinfo(){
        getResponse().addHeader("Access-Control-Allow-Origin", "*");
        String userInfoJsonString = getPara("transferUserInfo");
        UserInfo userInfo = new UserInfo();
        service.saveOrUpdateUserInfo(userInfoJsonString);
        renderText("555");
    }

}













