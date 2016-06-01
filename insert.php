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
echo "string";

?>
