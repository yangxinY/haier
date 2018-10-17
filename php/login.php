<?php
    //error_reporting(0); 
    header("Content-Type:text/html;charset=utf-8;");
    #1.从前端拿来数据;
    $username=@$_POST["username"];//@->防止为空；
    $password=@$_POST["password"];
    // $username="yangxinya";
    // $password="123456";
    if($username == ""){
        die("参数不全");
    }
    if($password == ""){
        die("参数不全");
    }
    #2.把数据放入到数据库之中；

    //1.如何连接数据；
    //mysql_connect(servername,username,password);
    $con=mysql_connect("localhost","root","123456");
    //echo $con;
    if($con){
        //echo "数据库连接成功";
        //die("数据库连接失败");
    }

    //向某一个表中写入一些东西；
    //1.选中数据库；
    mysql_select_db("userlist",$con);//userlist需要连接的数据库的名字；

    //判断是否存在相同用户名；
    //$result=mysql_query("SELECT * FROM detaillist");
    $result=mysql_query("SELECT username,password FROM detaillist WHERE username='$username'");
    //echo $result;
   
    //加密;
    $password=md5($password);
    while($row=mysql_fetch_array($result)){
        //echo json_encode($row);
        if($row['password']==$password){
            die( "登录成功");
        }
    }
    echo "账号或者密码不正确";
?>