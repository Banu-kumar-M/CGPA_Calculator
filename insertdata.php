<?php
    if (isset($_POST['sub1']) && isset($_POST['sub2']) && isset($_POST['sub3']) && isset($_POST['sub4']) && isset($_POST['sub5'])){
        
        $sub1 = $_POST['sub1'];
        $sub2 = $_POST['sub2'];
        $sub3 = $_POST['sub3'];
        $sub4 = $_POST['sub4'];
        $sub5 = $_POST['sub5'];
        $total = $_POST['tm'];
        $sgpa = $_POST['s'];
      
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "web";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
           
            $Insert = "INSERT INTO cgpa(username, sem, subcode, subname, submarks, total,sgpa) values(?, ?, ?, ?, ?,?, ?)";
            $stmt = $conn->prepare($Insert);
            $name=$_POST['uname2'];
            $sem="8";
            $code1="18CS81";
            $code2="18CS82X";
            $code3="18CS83";
            $code4="18CSS84";
            $code5="18CS185";


            $subn1="INTERNET OF THINGS";
            $subn2="PROFESSIONAL ELECTIVE-4";
            $subn3="PROJECT WORK PHASE-2";
            $subn4="TECHNICAL SEMINAR";
            $subn5="INTERNSHIP";

                $stmt->bind_param("sssssss",$name,$sem,$code1,$subn1, $sub1, $total, $sgpa);
                if ($stmt->execute()) {
                  
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code2,$subn2, $sub2, $total, $sgpa);
                if ($stmt->execute()) {
                   
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code3,$subn3, $sub3, $total, $sgpa);
                if ($stmt->execute()) {
                   
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code4,$subn4, $sub4, $total, $sgpa);
                if ($stmt->execute()) {
                  
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code5,$subn5, $sub5, $total, $sgpa);
                if ($stmt->execute()) {
                    echo "<script>
                    alert('data uploaded');
                    </script>";
                    echo "<script>setTimeout(\"location.href = 'cspage5.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }
                
            }
        
            $stmt->close();
            $conn->close();
        }
    else {
        echo "All field are required.";
        die();
    }
?>