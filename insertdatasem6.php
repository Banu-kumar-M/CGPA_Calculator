<?php
   
    $name =$_POST['uname'];
    $sem ="6";

        $sub1 = $_POST['sub1'];
        $sub2 = $_POST['sub2'];
        $sub3 = $_POST['sub3'];
        $sub4 = $_POST['sub4'];
        $sub5 = $_POST['sub5'];
        $sub6 = $_POST['sub6'];
        $sub7 = $_POST['sub7'];
        $sub8 = $_POST['sub8'];
       
        
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
           
            $code1="18CS61";
            $code2="18CS62";
            $code3="18CS63";
            $code4="18CS64X";
            $code5="18CS65X";
            $code6="18CSL66";
            $code7="18CSL67";
            $code8="18CSM68";


            $subn1="SYSTEM SOFTWARE AND COMPILERS";
            $subn2="COMPUTER GRAPHICS AND VISUALIZATION";
            $subn3="WEB TECHNOLOGY AND ITS APPLICATIONS";
            $subn4="PROFESSIONAL ELECTIVE-1";
            $subn5="OPEN ELECTIVE-A";
            $subn6="SYSTEM SOFTWARE LABORATORY";
            $subn7="COMPUTER GRAPHICS LABORATORY WITH MINI PROJECT";
            $subn8="MOBILE APPLICATION DEVELOPMENT";
           

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
                    
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code8,$subn8, $sub8, $total, $sgpa);
                if ($stmt->execute()) {
                    echo "<script>
                    alert('Uploaded');
                    </script>";
                    echo "<script>setTimeout(\"location.href = 'cspage3.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }
                
            }
        
            $stmt->close();
            $conn->close();
       
?>