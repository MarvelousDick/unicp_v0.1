package com.javen.weixin.service;

import com.alibaba.fastjson.JSONObject;
import com.javen.model.UserInfo;

public class WechatInterfaceService {

    private static final UserInfo dao = new UserInfo().dao();


    public UserInfo findById(int id) {
        return dao.findById(id);
    }

    public void deleteById(int id) {
        dao.deleteById(id);
    }

    public void saveUserInfo(UserInfo userInfo) {
        userInfo.save();
    }

    public UserInfo stringToUserInfo(String userInfoString){
        JSONObject userInfoJson = JSONObject.parseObject(userInfoString);

        UserInfo userInfo = new UserInfo();
        userInfo.setUserNo(userInfoJson.getIntValue("user_no"));
        userInfo.setNickName(userInfoJson.getString("nick_name"));
        userInfo.setSex(userInfoJson.getString("sex"));
        userInfo.setRequiredSex(userInfoJson.getString("required_sex"));
        userInfo.setBirthday(userInfoJson.getString("birthday"));
        userInfo.setWechatNumber(userInfoJson.getString("wechat_number"));
        userInfo.setQqNumber(userInfoJson.getString("qq_number"));
        userInfo.setLocation(userInfoJson.getString("location"));
        userInfo.setHomeTown(userInfoJson.getString("home_town"));
        userInfo.setUniversityName(userInfoJson.getString("university_name"));
        userInfo.setCollege(userInfoJson.getString("college"));
        userInfo.setMajor(userInfoJson.getString("major"));
        userInfo.setConstellation(userInfoJson.getString("constellation"));
        userInfo.setPersonality(userInfoJson.getString("personality"));
        userInfo.setLovedMusic(userInfoJson.getString("loved_music"));
        userInfo.setLovedMovieOrSeries(userInfoJson.getString("loved_movie_or_series"));
        userInfo.setLovedFood(userInfoJson.getString("loved_food"));
        userInfo.setTravedPlace(userInfoJson.getString("traved_place"));
        userInfo.setHoobie(userInfoJson.getString("hoobie"));

        return userInfo;
    }

    public void saveOrUpdateUserInfo(String userInfoString){
        UserInfo userInfo = this.stringToUserInfo(userInfoString);
        if (this.isUserNoExists(userInfo)){
            this.updateUserInfo(userInfo);
        }else{
            this.saveUserInfo(userInfo);
        }
    }


    public void updateUserInfo(UserInfo userInfo) {
        userInfo.update();
    }

    public boolean isUserNoExists(UserInfo userInfo) {

        if (dao.findById(userInfo.getUserNo()) == null) {
            return false;
        } else {
            return true;
        }
    }




}
