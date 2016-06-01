<?php
//Mariadb information
$servername="localhost";
$username="QPL";
$password="wys";
//connect to Mariadb
try{
  $conn=new PDO("mysql:host=$servername;dbname=Lab",$username,$password);
  $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//  echo "连接数据库成功!".'<br>';
}
catch (PDOException $e){
  echo "Connection failed:".$e->getMessage();
}
//Communication with JS,JS传回数据以_POST形式得到一个数组，可以按照“键值”直接使用，也可以json_encode;
//echo json_encode($_POST);
//同一个变量里选择两个选项时只会返回最后一个！
$arr_Query=$_POST;
$sql_none="SELECT * FROM Lab.equipments ";
// echo json_encode($arr_Query);
if ($arr_Query["ids"]!=NULL){
  $ids=$arr_Query["ids"];
  $sql_index="WHERE ids='$ids'";
}
else if (array_key_exists('toolname',$arr_Query)){
  $toolname=$arr_Query["toolname"];
  $sql_index="WHERE toolname='$toolname'";
}
else {$sql_index=" ";}
$sql=$sql_none.$sql_index;

$result=$conn->query($sql);

$row=$result->fetchAll();
$output=json_encode($row);
print($output);

?>
