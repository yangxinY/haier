<?php
    //error_reporting(0); 
    header("Content-Type:text/html;charset=utf-8;");
    #1.从前端拿来数据;
    $username=@$_POST["username"];//@->防止为空；
    $password=@$_POST["password"];
    $phone=@$_POST["phone"];
    if($username == ""){
        die("参数不全");
    }
    if($password == ""){
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
    $result=mysql_query("SELECT * FROM register");
    $result=mysql_query("SELECT phone FROM register WHERE phone='$phone'");
    //echo $result;
    $count=0;
    while($row=mysql_fetch_array($result)){
        //echo json_encode($row)."</br>";
        $count++;
    }

    //用户名重名；
    if($count != 0){
        die("该账号已注册");
    }

    //加密密码；
    $password=md5($password);
    

    //2.写sql语句；Persons->哪个表；FirstName,LastName,Age->字段；
    mysql_query("INSERT INTO register(phone)VALUES('$phone')");
    // if($query){
    //     echo"数据库插入成功";
    // }
    // echo mysql_error();//检错；
    if(mysql_error()){
        die("数据库错误".mysql_error());
    }

    echo "注册成功";
?>