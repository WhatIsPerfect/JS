<?php
/*登录*/
$u=$_GET['user'];
$p=$_GET['password'];

$conn=@mysql_connect('localhost','root','nie520nie') or die ('连接失败');
mysql_query("set names 'GBK'");
mysql_select_db('USER');

$yz="no";

$sql1 = "SELECT * FROM us WHERE telphone='$u' AND password='$p'";

$query = mysql_query($sql1, $conn);
if (!$query) {
    echo "查询不到数据！" . mysql_error();
}
$row = mysql_fetch_array($query);
//print_r($row);
if ($row) {
    $yz='ok';

}
echo $yz;



mysql_close($conn);
