//jsonp的封装
function jsonp(url,call){
    return new Promise(function(reselve,rejected){
        var cb_name = "HZ" + new Date().getTime();
        window[cb_name] = function(res){
            reselve(res);
        }
        var script = document.createElement("script");
        var opt = /\?/.test(url) ? "&" : "?";
        var path = url + opt + call + "=" + cb_name;
        script.src = path;
        document.body.appendChild(script);
        script.onload = function(){
            this.remove();
        }
    })
}

//GET 的promise版封装
function ajaxGet(url){
    return new Promise(function(resolve,rejected){
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(xhr.response);
            }
        }
    })
}

//ajax中的POST封装
function ajaxPost(url,callback,data){
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8 ");
    xhr.send(data);
    xhr.onload = function(){
        if(xhr.status == 200){
            callback(xhr.response);
        }
    }
}