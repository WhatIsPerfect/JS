//用户框失去焦点后验证value值
function oBlur_1() {
    var a = document.getElementsByTagName("input")[0].value;
    if (!a) { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
    } else { //用户框value值不为空
        document.getElementById("remind_1").innerHTML = "";
        document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
    }
}

//密码框失去焦点后验证value值
function oBlur_2() {
    var b = document.getElementsByTagName("input")[1].value;
    if (!b) { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    } else { //密码框value值不为空
        document.getElementById("remind_2").innerHTML = "";
        document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
        document.getElementById("change_margin_3").style.marginTop = 19 + "px";
    }
}

//用户框获得焦点的隐藏提醒
function oFocus_1() {
    document.getElementById("remind_1").innerHTML = "";
    document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
}

//密码框获得焦点的隐藏提醒
function oFocus_2() {
    document.getElementById("remind_2").innerHTML = "";
    document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
    document.getElementById("change_margin_3").style.marginTop = 19 + "px";
}

//若输入框为空，阻止表单的提交,否则登录验证
function buttonTest() {
    var a = document.getElementsByTagName("input")[0].value;
    var b = document.getElementsByTagName("input")[1].value;
    var c = document.getElementsByTagName("input")[2].value;
    if (!a && !b) { //用户框value值和密码框value值都为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    } else if (!a&& b) { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
    } else if (!b&&a) { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    }else{
        if(c == "登录"){
            var xhr;
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }else{
                xhr=new ActiveXObject('Microsoft.XMLHTTP')
            }
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200||xhr.status==304){
                        if(xhr.responseText =='ok'){
                            alert('登录成功!');
                            location.href='../index.html';
                        }else{
                            alert('用户名或者密码错误!');
                        }
                    }
                }
            };
            xhr.open("POST",'login.php?user='+a+'&password='+b,true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
            xhr.send();
        }else if(c == "创建账号"){
            var xhr;
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }else{
                xhr=new ActiveXObject('Microsoft.XMLHTTP')
            }
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200||xhr.status==304){
                        if(xhr.responseText =='ok'){
                            alert('注册成功!');
                            location.href='./login.html';
                        }else{
                            alert('账号已被注册!');
                        }
                    }
                }
            };
            xhr.open("POST",'register.php?user='+a+'&password='+b,true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
            xhr.send();
        }
    }
}
