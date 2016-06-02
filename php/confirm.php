<?php
$cfmInfo=$_POST;
if ($cfmInfo["confirm"]=="ok"){
  echo "确认完成，已成功添加一条记录！";
}
else {
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

  $maxIdSQL="SELECT MAX(rowid) FROM Lab.equipments";
  $maxIdSQLResult=$conn->query($maxIdSQL);//get a PDOStatement
  $maxIdArr=$maxIdSQLResult->fetchAll();//get a Array
  $maxId=$maxIdArr[0][0];

  $sqlDelet="DELETE FROM equipments where rowid=$maxId";
  $deletCount=$conn->exec($sqlDelet);

  $conn = null;

  echo "已成功取消刚添加的 ".$deletCount." 条记录，请重新插入！";
}
?>
