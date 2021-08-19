<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message
if (empty($_POST['username1']) || empty($_POST['password1'])) {
$error = "Username or Password is invalid";
}
else{
// Define $username and $password
$username = $_POST['username1'];
$password = $_POST['password1'];


// mysqli_connect() function opens a new connection to the MySQL server.
$conn = mysqli_connect("localhost", "root", "", "web");


// SQL query to fetch information of registerd users and finds user match.
$query = "SELECT username, password from register where username=? AND password=? LIMIT 1";
// To protect MySQL injection for Security purpose
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$stmt->bind_result($username, $password);
$stmt->store_result();
if($stmt->fetch()){

    header("Location:landingpage.html");}
else{
    echo "<script>
    alert('Login Failed');
    </script>";
    echo "<script>setTimeout(\"location.href = 'login.html';\",10);</script>";
}
mysqli_close($conn); // Closing Connection
}
?>