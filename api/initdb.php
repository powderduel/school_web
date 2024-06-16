<?php
//connect var
$servername = "mysql-school.alwaysdata.net";
$username = "school";
$password = "school10361072";

//init connection
$conn =mysqli_connect($servername, $username, $password);

//check connection 
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully\n";


?>