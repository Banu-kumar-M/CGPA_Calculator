<?php

   $check = $_POST['c1sem'];   
   if($check=="3")
   {
    $name =$_POST['uname'];
    $sem ="3";

        $sub1 = $_POST['sub1'];
        $sub2 = $_POST['sub2'];
        $sub3 = $_POST['sub3'];
        $sub4 = $_POST['sub4'];
        $sub5 = $_POST['sub5'];
        $sub6 = $_POST['sub6'];
        $sub7 = $_POST['sub7'];
        $sub8 = $_POST['sub8'];
        $sub9 = $_POST['sub9'];
       
        
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
           
            $code1="18MAT31";
            $code2="18CS32";
            $code3="18CS33";
            $code4="18CS34";
            $code5="18CS35";
            $code6="18CS36";
            $code7="18CS37";
            $code8="18CS38";
            $code9="18CS39";


            $subn1="TRANSFORM CALCULUS,FOURIER SERIES & NUM TECH";
            $subn2="DATA STRUCTURES AND APPLICATIONS";
            $subn3="ANALOG AND DIGITAL ELECTRONICS";
            $subn4="COMPUTER ORGANIZATION";
            $subn5="SOFTWARE ENGINEERING";
            $subn6="DISCRETE MATHEMATICAL STRUCTURES";
            $subn7="ANALOG AND DIGITAL ELECTRONICS LABORATORY";
            $subn8="DATA STRUCTURES LABORATORY";
            $subn9="AADALITHA KANNADA";
           

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
                    
                }
                else {
                    echo $stmt->error;
                }

                $stmt->bind_param("sssssss",$name,$sem,$code8,$subn9, $sub9, $total, $sgpa);
                if ($stmt->execute()) {
                    echo "<script>
                    alert('Uploaded');
                    </script>";
                    echo "<script>setTimeout(\"location.href = 'cspage2.html';\",100);</script>";
                   
                }
                else {
                    echo $stmt->error;
                }
                
            }
        
            $stmt->close();
            $conn->close();
        }


        if($check=="4")
        {
            $name =$_POST['uname'];
            $sem ="4";
        
     
             $sub1 = $_POST['sub1'];
             $sub2 = $_POST['sub2'];
             $sub3 = $_POST['sub3'];
             $sub4 = $_POST['sub4'];
             $sub5 = $_POST['sub5'];
             $sub6 = $_POST['sub6'];
             $sub7 = $_POST['sub7'];
             $sub8 = $_POST['sub8'];
             $sub9 = $_POST['sub9'];
            
             
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
             
                 $code1="18MAT41";
                 $code2="18CS42";
                 $code3="18CS43";
                 $code4="18CS44";
                 $code5="18CS45";
                 $code6="18CS46";
                 $code7="18CSL47";
                 $code8="18CSL48";
                 $code9="18CPC39";
     
     
                 $subn1="COMPLEX ANALYSIS, PROBABILITY AND STATISTICAL METHODS";
                 $subn2="DESIGN AND ANALYSIS OF ALGORITHM";
                 $subn3="OPERATING SYSTEMS";
                 $subn4="MICROCONTROLLER AND EMBEDDED SYSTEMS";
                 $subn5="OBJECT ORIENTED CONCEPTS";
                 $subn6="DATA COMMUNICATIONY";
                 $subn7="DESIGN AND ANALYSIS OF ALGORITHM LABORATORY";
                 $subn8="MICROCONTROLLER AND EMBEDDED SYSTEMS LABORATORY";
                 $subn9="CONSTITUTION OF INDIA, PROFESSIONAL ETHICS ,CYBER LAW";
                
     
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
                      
                    }
                    else {
                        echo $stmt->error;
                    }
    
                    
                    $stmt->bind_param("sssssss",$name,$sem,$code9,$subn9, $sub9, $total, $sgpa);
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
    
             if($check=="5")
        {
            $name =$_POST['uname'];
            $sem ="5";
        
     
             $sub1 = $_POST['sub1'];
             $sub2 = $_POST['sub2'];
             $sub3 = $_POST['sub3'];
             $sub4 = $_POST['sub4'];
             $sub5 = $_POST['sub5'];
             $sub6 = $_POST['sub6'];
             $sub7 = $_POST['sub7'];
             $sub8 = $_POST['sub8'];
             $sub9 = $_POST['sub9'];
            
             
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
             
                 $code1="18CS51";
                 $code2="18CS52";
                 $code3="18CS53";
                 $code4="18CS54";
                 $code5="18CS55";
                 $code6="18CS56";
                 $code7="18CSL57";
                 $code8="18CSL58";
                 $code9="18CIV59";
     
     
                 $subn1="MANAGEMENT AND ENTREPRENEURSHIP FOR IT INDUSTRY";
                 $subn2="COMPUTER NETWORKS AND SECURITY";
                 $subn3="DATABASE MANAGEMENT SYSTEMS";
                 $subn4="AUTOMATA THEORY AND COMPUTABILITY";
                 $subn5="APPLICATION DEVELOPMENT USING PYTHON";
                 $subn6="UNIX PROGRAMMING";
                 $subn7="COMPUTER NETWORK LABORATORY";
                 $subn8="DBMS LABORATORY WITH MINI PROJECT";
                 $subn9="ENVIRONMENTAL STUDIES";
     
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
                      
                    }
                    else {
                        echo $stmt->error;
                    }
    
                    
                    $stmt->bind_param("sssssss",$name,$sem,$code9,$subn9, $sub9, $total, $sgpa);
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
    
   