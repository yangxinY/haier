<?php
    $data = '"我是jsonp"';
    $callback_name = @$_GET["cb"];
    
    if($callback_name != ""){
        #代表 这是一个jsonp请求;
        echo "$callback_name($data)";
    }else{
        echo $data;
    }
?>