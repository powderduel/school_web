<?php
include 'initdb.php';

$email = $conn->real_escape_string($_POST['email']);
$username =$conn-> real_escape_string($_POST['username']);
$password = $conn->real_escape_string($_POST['password']);
$salt =bin2hex(random_bytes(32));

$account_check ="SELECT * FROM USER WHERE username='$username' LIMIT 1";
$result = $conn->query($account_check);
if ($result->num_rows > 0) {
    echo "Username already exists";
    exit();
}

$hashedPassword =hash('sha256', $password.$salt);
$sql = "INSERT INTO users (username ,email,hashedpassword,salt) VALUES ('$username','$email','$hashedPassword','$salt')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>