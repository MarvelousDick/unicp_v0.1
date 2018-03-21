package com.javen.weixin.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

public class WeiXinOauthService {
    public String urlWithParam(String url, String userInfo, String accessToken, String openID) {
        String newUrl = new String();
        try {
            // Replace % with %25 and Url Decode
            userInfo = URLEncoder.encode(userInfo.replaceAll("%(?![0-9a-fA-F]{2})", "%25"), "UTF-8");
            accessToken = URLEncoder.encode(accessToken.replaceAll("%(?![0-9a-fA-F]{2})", "%25"), "UTF-8");
            openID = URLEncoder.encode(openID.replaceAll("%(?![0-9a-fA-F]{2})", "%25"), "UTF-8");

            StringBuffer stb = new StringBuffer(url);
            stb.append("?userinfo=");
            stb.append(userInfo);
            stb.append("&accesstoken=");
            stb.append(accessToken);
            stb.append("&openid=");
            stb.append(openID);

            newUrl = stb.toString();

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }finally {
            return newUrl;
        }
    }
//    public static void main(String[] args){
//        WeiXinOauthService wxs = new WeiXinOauthService();
//        System.out.println(wxs.urlWithParam("www.baidu.com","dadaio", "666","999"));
//    }
}
