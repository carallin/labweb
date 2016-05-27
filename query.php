<?php
//echo "hello,http!";
//Mariadb information
$servername="localhost";
$username="root";
$password="carallen";
//connect to Mariadb
try{
  $conn=new PDO("mysql:host=$servername;dbname=Lab",$username,$password);
  $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//  echo "连接数据库成功!".'<br>';
    // echo $_REQUEST.'<br>';
  //echo json_encode($_POST);
  // echo $_POST["toolname"].'<br>';
  //echo json_encode($_POST);
}
catch (PDOException $e){
  echo "Connection failed:".$e->getMessage();
}
//Communication with JS
$category=$_POST["category"];
// $toolname=$_POST["toolname"];
// $detail=$_POST["detail"];
// $ids=$_POST["ids"];
$brand=$_POST["brand"];
// $owner=$_POST["owner"];
// $number=$_POST["number"];
// $time=$_POST["time"];
// $warranty=$_POST["warranty"];

//$toolname=$_POST["toolname"];
//echo json_encode($_POST);

$sql_category="SELECT * FROM Lab.equipments WHERE category='$category'";
$sql_brand="and brand='$brand'";
$sql=$sql_category." ".$sql_brand;
$result=$conn->query($sql);

// echo '<table border="1" align="center" width=90%>';
// while(list($类型,$名称,$详细名称,$型号,$品牌,$购买人,$数量,$购买时间,$保修)=$result->fetch()){
// 	echo '<tr>';
// 	echo '<th>',$类型,'</th>';
//   echo '<th>',$名称,'</th>';
//   echo '<th>',$详细名称,'</th>';
// 	echo '<th>',$型号,'</th>';
// 	echo '<th>',$品牌,'</th>';
// 	echo '<th>',$购买人,'</th>';
// 	echo '<th>',$数量,'</th>';
//   echo '<th>',$购买时间,'</th>';
//   echo '<th>',$保修,'</th>';
// 	echo '</tr>';
// }
// echo '</table>';
// while ($row=$result->fetch()){
//  print_r($row);
// }
$row=$result->fetchAll();
$output=json_encode($row);
print($output);
?>
