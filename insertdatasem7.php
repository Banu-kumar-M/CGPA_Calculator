<?php

   $check = $_POST['csem'];   
   if($check=="7")
   {
    $name =$_POST['uname1'];
    $sem ="7";

        $sub1 = $_POST['sub1'];
        $sub2 = $_POST['sub2'];
        $sub3 = $_POST['sub3'];
        $sub4 = $_POST['sub4'];
        $sub5 = $_POST['sub5'];
        $sub6 = $_POST['sub6'];
        $sub7 = $_POST['sub7'];
       
       
       
        
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
           
            $code1="18CS71";
            $code2="18CS72";
            $code3="18CS73X";
            $code4="18CS74X";
            $code5="18CS75X";
            $code6="18CSL76";
            $code7="18CSP77";
          

            $subn1="ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING";
            $subn2="BIG DATA ANALYTICS";
            $subn3="PROFESSIONAL ELECTIVE-2";
            $subn4="PROFESSIONAL ELECTIVE-3";
            $subn5="OPEN ELECTIVE-B";
            $subn6="ARTIFICIAL INTELLIGENCE,MACHINE LEARNING LABORATORY";
            $subn7="PROJECT WORK PHASE-1";
         

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
                  
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code6,$subn6, $sub6, $total, $sgpa);
                if ($stmt->execute()) {
                    
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code7,$subn7, $sub7, $total, $sgpa);
                if ($stmt->execute()) {
                    
                    echo "<script>
                    alert('Uploaded');
                    </script>";
                    echo "<script>setTimeout(\"location.href = 'cspage4.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }

              
                
            }
        
            $stmt->close();
            $conn->close();
        }
