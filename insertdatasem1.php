<?php
   $check = $_POST['csem'];   
   if($check=="1")
   {
    $name =$_POST['uname'];
    $sem ="1";

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
           
            $code1="18MAT11";
            $code2="18PHY12";
            $code3="18ELE13";
            $code4="18CIV14";
            $code5="18EGDL15";
            $code6="18PHYL16";
            $code7="18ELEL17";
            $code8="18EGH18";


            $subn1="CALCULUS AND LINEAR ALGEBRA";
            $subn2="ENGINEERING PHYSICS";
            $subn3="BASIC ELECTRICAL ENGINEERING";
            $subn4="ELEMENTS OF CIVIL ENGINEERING AND MECHANICS";
            $subn5="ENGINEERING GRAPHICS";
            $subn6="ENGINEERING PHYSICS LABORATORY";
            $subn7="BASIC ELECTRICAL ENGINEERING LABORATORY";
            $subn8="TECHNICAL ENGLISH-I";
           

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
                    echo "<script>setTimeout(\"location.href = 'cspage.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }
                
            }
        
            $stmt->close();
            $conn->close();
        }

    if($check=="2")
    {
        $name =$_POST['uname'];
        $sem ="2";
    
 
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
         
             $code1="18MAT21";
             $code2="18CHE22";
             $code3="18CPS23";
             $code4="18ELN24";
             $code5="18ME25";
             $code6="18CHEL26";
             $code7="18CPL27";
             $code8="18EGH28";
 
 
             $subn1="ADVANCED CALCULUS AND NUMERICAL METHODS";
             $subn2="ENGINEERING CHEMISTRY";
             $subn3="C PROGRAMMING FOR PROBLEM SOLVING";
             $subn4="BASIC ELECTRONICS";
             $subn5="ELEMENTS OF MECHANICAL ENGINEERING";
             $subn6="ENGINEERING CHEMISTRY LABORATORY";
             $subn7="C PROGRAMMING LABORATORY";
             $subn8="TECHNICAL ENGLISH-II";
            
 
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
                    echo "<script>setTimeout(\"location.href = 'cspage.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }
                
                 
             }
         
             $stmt->close();
             $conn->close();
         }   

?>