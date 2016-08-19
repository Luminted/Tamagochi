"use strict";

var reg_button = $("#reg_button");

var username_field = $("#reg_username");
var email_field = $("#reg_email");
var password_field = $("#reg_password");
var re_password_field = $("#reg_password_re");

var error_log = $("#reg_error_log");

var username = username_field.value;
var email = email_field.value;
var password = md5(password_field.value);


function $(s){
    return document.querySelector(s);
}

function ajax(url, method, data, onSuccess, onError){
  var xhttp = new XMLHttpRequest();
  var _data = Object.keys(data).map(function (key) {
  	return `${key}=${data[key]}`;
  }).join('&');
  
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      onSuccess(xhttp.responseText);
    }else{
        onError(xhttp);
    }
  };
  xhttp.open(method, url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(_data);
}