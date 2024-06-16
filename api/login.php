<?php
session_start();
//login 
include 'initdb.php';

$email = $conn->real_escape_string($_POST['email']);
$password = $conn->real_escape_string($_POST['password']);  

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result ->num_rows == 1)
{
    $row = $result->fetch_assoc();
    $shashedPassword =hash('sha256', $password.$row['salt']);
    if ($hashedPassword == $row['hashedpassword'])
    {
        echo "Login successful";
        $_SESSION['username'] = $row['username'];
        header("Location: member.php");
        exit();
    }
    else
    {
        echo "Login failed";
    }
}
$conn->close();
?>