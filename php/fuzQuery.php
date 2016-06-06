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

// $ids=explode(" ",trim($_POST["ids"]));
// $toolname=explode(" ",trim($_POST["toolname"]));
// $detail=explode(" ",trim($_POST["detail"]));
// $owner=explode(" ",trim($_POST["owner"]));

/////////////////////////只支持单关键字查询的方案//////////////////////////////////
$sql_none="SELECT * FROM Lab.equipments ";
$sql_index="    ";
foreach ($_POST as $key=>$value) {
  $sql_index=$sql_index.$key." LIKE '%".trim($value)."%' AND ";
}
$sql_index=substr($sql_index,0,-4);
$sql=$sql_none."WHERE".$sql_index;
///////////////////////////////////////////////////////////////////////////////

$result=$conn->query($sql);
$row=$result->fetchAll();
$output=json_encode($row);
$conn = null;
print($output);
?>
