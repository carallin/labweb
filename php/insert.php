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
// communicate with JS
$insertArr=$_POST;
$category=$insertArr["category"];
$toolname=$insertArr["toolname"];
$detail=$insertArr["detail"];
$ids=$insertArr["ids"];
$brand=$insertArr["brand"];
$owner=$insertArr["owner"];
$number=(int)$insertArr["number"];
$buytime=$insertArr["time"];
$warranty=(int)$insertArr["warranty"];
$timeyear=substr($buytime,0,4);

// mysql execute
$maxIdSQL="SELECT MAX(rowid) FROM Lab.equipments";
$maxIdSQLResult=$conn->query($maxIdSQL);//get a PDOStatement
$maxIdArr=$maxIdSQLResult->fetchAll();//get a Array
$maxId=$maxIdArr[0][0]+1;
//echo $maxId;
$resetAutoIncrement="ALTER TABLE Lab.equipments AUTO_INCREMENT=$maxId";
$conn->exec($resetAutoIncrement);

$sql="INSERT INTO Lab.equipments (category,toolname,detail,ids,brand,owner,number,timeyear,buytime,warranty) VALUES ('$category','$toolname','$detail','$ids','$brand','$owner',$number,'$timeyear','$buytime',$warranty)";
$addCount=$conn->exec($sql);
//echo "你刚刚添加了".$addCount."条记录到数据库！";

$sqlConfirm="SELECT * FROM Lab.equipments where rowid>=$maxId";
$sqlConfirmResult=$conn->query($sqlConfirm);
$sqlConfirmArr=$sqlConfirmResult->fetchAll();
$sqlConfirmJson=json_encode($sqlConfirmArr);
$conn = null;
echo $sqlConfirmJson;
?>
