package com.javen.weixin.controller;

import com.javen.model.UserInfo;
import com.javen.model.Users;
import com.javen.weixin.service.WechatInterfaceService;
import com.jfinal.core.Controller;

public class VueTestController extends Controller {


    public void index() {

        render("my-project/dist/index.html");
//        renderJson(users.toJson());
    }

}













