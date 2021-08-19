<?php
    if (isset($_POST['firstname']) && isset($_POST['password'])&&isset($_POST['email'])){
        
        $username = $_POST['firstname'];
        $email=$_POST['email'];
        $password = $_POST['password'];
        
      
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "web";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM register WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO register(username,email,password) values(?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("sss",$username, $email, $password);
                if ($stmt->execute()) {
                    echo "<script>
                    alert('Account created');
                    </script>";
                    echo "<script>setTimeout(\"location.href = 'login.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "<script>
                alert('Account already exists');
                </script>";
                echo "<script>setTimeout(\"location.href = 'login.html';\",100);</script>";
            }
            $stmt->close();
            $conn->close();
           
        }
    }
    else {
        echo "<script>
                alert('All fields are required');
                </script>";
              
          
        die();
    }
?>