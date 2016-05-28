<?php
//Mariadb information
$servername="localhost";
$username="root";
$password="carallen";
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
$category=$arr_Query["category"];
$sql_category="SELECT * FROM Lab.equipments WHERE category='$category'";
// $sql_toolname=array_key_exists('toolname',$arr_Query)?"AND toolname='$_POST["toolname"]'":" ";
// $sql_detail=array_key_exists('detail',$arr_Query)?"AND detail='$arr_Query["detail"]'":" ";
// $sql_ids=array_key_exists('ids',$arr_Query)?"AND ids='$arr_Query["ids"]'":" ";
// $sql_brand=array_key_exists('brand',$arr_Query)?"AND brand='$arr_Query["brand"]'":" ";
// $sql_owner=array_key_exists('owner',$arr_Query)?"AND owner='$arr_Query["owner"]'":" ";
// $sql_number=array_key_exists('number',$arr_Query)?"AND number='$arr_Query["number"]'":" ";
// $sql_time=array_key_exists('time',$arr_Query)?"AND time='$arr_Query["time"]'":" ";
// $sql_warranty=array_key_exists('warranty',$arr_Query)?"AND warranty='$arr_Query["warranty"]'":" ";
if (array_key_exists('toolname',$arr_Query)){
  $toolname=$arr_Query["toolname"];
  $sql_toolname=" AND toolname='$toolname'";
}
else {$sql_toolname=" ";}

if (array_key_exists('detail',$arr_Query)){
  $detail=$arr_Query["detail"];
  $sql_detail=" AND detail='$detail'";
}
else {$sql_detail=" ";}

if (array_key_exists('ids',$arr_Query)){
  $ids=$arr_Query["ids"];
  $sql_ids=" AND ids='$ids'";
}
else {$sql_ids=" ";}

if (array_key_exists('brand',$arr_Query)){
  $brand=$arr_Query["brand"];
  $sql_brand=" AND brand='$brand'";
}
else {$sql_brand=" ";}

if (array_key_exists('owner',$arr_Query)){
  $owner=$arr_Query["owner"];
  $sql_owner=" AND owner='$owner'";
}
else {$sql_owner=" ";}

if (array_key_exists('number',$arr_Query)){
  $number=$arr_Query["number"];
  $sql_number=" AND number='$number'";
}
else {$sql_number=" ";}

if (array_key_exists('boughtime',$arr_Query)){
  $boughtime=$arr_Query["boughtime"];
  $sql_boughtime=" AND boughtime='$boughtime'";
}
else {$sql_boughtime=" ";}

if (array_key_exists('warranty',$arr_Query)){
  $warranty=$arr_Query["warranty"];
  $sql_warranty=" AND warranty='$warranty'";
}
else {$sql_warranty=" ";}

$sql=$sql_category.$sql_toolname.$sql_detail.$sql_ids.$sql_brand.$sql_number.$sql_warranty.$sql_owner.$sql_boughtime.';';
// echo $sql;
$result=$conn->query($sql);

$row=$result->fetchAll();
$output=json_encode($row);
print($output);
?>
