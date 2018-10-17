<?php
    $data = '"我是jsonp2"';
    $callback_name = @$_GET["callback"];
    
    if($callback_name != ""){
        #代表 这是一个jsonp请求;
        echo "$callback_name($data)";
    }else{
        echo $data;
    }
?>