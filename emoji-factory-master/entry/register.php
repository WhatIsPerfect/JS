<?php
/*注册*/
$username=$_REQUEST['user'];
$password=$_REQUEST['password'];

$conn = @mysql_connect("localhost","root","nie520nie") or die ('连接失败');;
mysql_query("set names 'GBK'");
mysql_select_db('USER');

$sq= "select * from us where telphone='$username' and password='$password'";

$retval = mysql_query( $sq, $conn );
if(! $retval )
{
    echo "查询不到数据".mysql_error();
}else{
    $row=mysql_fetch_row($retval);
    if(!$row){
        $sql1 = "INSERT INTO us".
            "(telphone,password)".
            "VALUES ".
            "('$username','$password')";
        $retval = mysql_query( $sql1, $conn );
        if(!$retval){
            echo "插入数据失败".mysql_error();
        }
        echo 'ok';
    }
}

mysql_close($conn);
?>