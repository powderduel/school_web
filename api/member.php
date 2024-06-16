<?php
session_start();
if(!isset($_SESSION['username']))
{
    header("Location: login.html");
    exit();
}
$userId = $_SESSION['ID'];
include 'initdb.php';
$sql = "SELECT * FROM users WHERE ID='$id'";
$result = $conn->query($sql);
if($result->num_rows==1)
{
    $row = $result->fetch_assoc();
    echo "Welcome " . $row['username'];
}
else
{
    echo "User not found";
}
$conn->close();
?>