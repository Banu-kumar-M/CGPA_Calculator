<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message


$username="A";
$sem1="1";
$sem2="2";
$sem3="3";
$sem4="4";
$sem5="5";
$sem6="6";
$sem7="7";
$sem8="8";

$sgpa1;
$total1;


// mysqli_connect() function opens a new connection to the MySQL server.
$conn = mysqli_connect("localhost", "root", "", "web");


// SQL query to fetch information of registerd users and finds user match.
$query = "SELECT DISTINCT sgpa, total from cgpa where username=? AND sem  =?";
// To protect MySQL injection for Security purpose
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $username, $sem1);
$stmt->execute();
$stmt->bind_result($sgpa1, $total1);
$stmt->store_result();
if($stmt->fetch()){


    
}
mysqli_close($conn); // Closing Connection
}
?>