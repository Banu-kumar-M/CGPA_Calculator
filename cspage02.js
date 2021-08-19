
function cal()
{
    var val1=parseFloat(document.getElementById("s1").value);
    var val2=parseFloat(document.getElementById("s2").value);
    var val3=parseFloat(document.getElementById("s3").value);
    var val4=parseFloat(document.getElementById("s4").value);
    var val5=parseFloat(document.getElementById("s5").value);
    var val6=parseFloat(document.getElementById("s6").value);
    var val7=parseFloat(document.getElementById("s7").value);
  

    if(val1>100||val2>100||val3>100||val4>100||val5>100||val6>100||val7>100){

        alert("Marks cannot  exceed 100");

    }
    
    if(val1 == "")
    {
        document.getElementById("g1").value=""
        document.getElementById("c1").value=""  
    }
       
        
    if (val1>=90)
    {
        document.getElementById("g1").value="O"
        document.getElementById("c1").value=10

      
        
    }
    if (val1>=80 && val1<90)
    {
        document.getElementById("g1").value="S"
        document.getElementById("c1").value=9
       
    }
    if (val1>=70 && val1<80)
    {
        document.getElementById("g1").value="A"
        document.getElementById("c1").value=8
        
    }
    if (val1>=60 && val1<70)
    {
        document.getElementById("g1").value="B"
        document.getElementById("c1").value=7
       
    }
    if (val1>=50 && val1<60)
    {
        document.getElementById("g1").value="C"
        document.getElementById("c1").value=6
       
    }
    if (val1>=45 && val1<50)
    {
        document.getElementById("g1").value="D"
        document.getElementById("c1").value=5
        
    }
    if (val1>=40 && val1<45)
    {
        document.getElementById("g1").value="E"
        document.getElementById("c1").value=4
     
    }

    if (val1<40)
    {
        document.getElementById("g1").value="F"
        document.getElementById("c1").value=0
        
       
    }
  
    









    if (val2>=90)
    {
        document.getElementById("g2").value="O"
        document.getElementById("c2").value=10
        
    }
    if (val2>=80 && val2<90)
    {
        document.getElementById("g2").value="S"
        document.getElementById("c2").value=9
        
    }
    if (val2>=70 && val2<80)
    {
        document.getElementById("g2").value="A"
        document.getElementById("c2").value=8
      
    }
    if (val2>=60 && val2<70)
    {
        document.getElementById("g2").value="B"
        document.getElementById("c2").value=7
        
    }
    if (val2>=50 && val2<60)
    {
        document.getElementById("g2").value="C"
        document.getElementById("c2").value=6
       
    }
    if (val2>=45 && val2<50)
    {
        document.getElementById("g2").value="D"
        document.getElementById("c2").value=5
       
    }
    if (val2>=40 && val2<45)
    {
        document.getElementById("g2").value="E"
        document.getElementById("c2").value=4
        
    }

    if (val2<40)
    {
        document.getElementById("g2").value="F"
        document.getElementById("c2").value=0
        
        
    }
    





    if (val3>=90)
    {
        document.getElementById("g3").value="O"
        document.getElementById("c3").value=10; 
    }
    if (val3>=80 && val3<90)
    {
        document.getElementById("g3").value="S"
        document.getElementById("c3").value=9
       
    }
    if (val3>=70 && val3<80)
    {
        document.getElementById("g3").value="A"
        document.getElementById("c3").value=8
        
    }
    if (val3>=60 && val3<70)
    {
        document.getElementById("g3").value="B"
        document.getElementById("c3").value=7
       
    }
    if (val3>=50 && val3<60)
    {
        document.getElementById("g3").value="C"
        document.getElementById("c3").value=6
       
    }
    if (val3>=45 && val3<50)
    {
        document.getElementById("g3").value="D"
        document.getElementById("c3").value=5
       
    }
    if (val3>=40 && val3<45)
    {
        document.getElementById("g3").value="E"
        document.getElementById("c3").value=4
        
    }

    if (val3<40)
    {
        document.getElementById("g3").value="F"
        document.getElementById("c3").value=0
        document.getElementById("b").style.borderColor="red";
    }
    else{
        document.getElementById("b").style.borderColor="#FFFFFF";
    }



    if (val4>=90)
    {
        document.getElementById("g4").value="O"
        document.getElementById("c4").value=10
        
    }
    if (val4>=80 && val4<90)
    {
        document.getElementById("g4").value="S"
        document.getElementById("c4").value=9
        
    }
    if (val4>=70 && val4<80)
    {
        document.getElementById("g4").value="A"
        document.getElementById("c4").value=8
       
    }
    if (val4>=60 && val4<70)
    {
        document.getElementById("g4").value="B"
        document.getElementById("c4").value=7
        
    }
    if (val4>=50 && val4<60)
    {
        document.getElementById("g4").value="C"
        document.getElementById("c4").value=6
      
    }
    if (val4>=45 && val4<50)
    {
        document.getElementById("g4").value="D"
        document.getElementById("c4").value=5
       
    }
    if (val4>=40 && val4<45)
    {
        document.getElementById("g4").value="E"
        document.getElementById("c4").value=4
       
    }

    if (val4<40)
    {
        document.getElementById("g4").value="F"
        document.getElementById("c4").value=0
        document.getElementById("b").style.borderColor="red";
       
    }
    else{
        document.getElementById("b").style.borderColor="#FFFFFF";
    }




    if (val5>=90)
    {
        document.getElementById("g5").value="O"
        document.getElementById("c5").value=10
    }
    if (val5>=80 && val5<90)
    {
        document.getElementById("g5").value="S"
        document.getElementById("c5").value=9
    }
    if (val5>=70 && val5<80)
    {
        document.getElementById("g5").value="A"
        document.getElementById("c5").value=8
    }
    if (val5>=60 && val5<70)
    {
        document.getElementById("g5").value="B"
        document.getElementById("c5").value=7
    }
    if (val5>=50 && val5<60)
    {
        document.getElementById("g5").value="C"
        document.getElementById("c5").value=6
    }
    if (val5>=45 && val5<50)
    {
        document.getElementById("g5").value="D"
        document.getElementById("c5").value=5
    }
    if (val5>=40 && val5<45)
    {
        document.getElementById("g5").value="E"
        document.getElementById("c5").value=4
    }

    if (val5<40)
    {
        document.getElementById("g5").value="F"
        document.getElementById("c5").value=0
        document.getElementById("b").style.borderColor="red";
       
    }
    else{
        document.getElementById("b").style.borderColor="#FFFFFF";
    }





    if (val6>=90)
    {
        document.getElementById("g6").value="O"
        document.getElementById("c6").value=10
    }
    if (val6>=80 && val6<90)
    {
        document.getElementById("g6").value="S"
        document.getElementById("c6").value=9
    }
    if (val6>=70 && val6<80)
    {
        document.getElementById("g6").value="A"
        document.getElementById("c6").value=8
    }
    if (val6>=60 && val6<70)
    {
        document.getElementById("g6").value="B"
        document.getElementById("c6").value=7
    }
    if (val6>=50 && val6<60)
    {
        document.getElementById("g6").value="C"
        document.getElementById("c6").value=6
    }
    if (val6>=45 && val6<50)
    {
        document.getElementById("g6").value="D"
        document.getElementById("c6").value=5
    }
    if (val6>=40 && val6<45)
    {
        document.getElementById("g6").value="E"
        document.getElementById("c6").value=4
    }

    if (val6<40)
    {
        document.getElementById("g6").value="F"
        document.getElementById("c6").value=0
        document.getElementById("b").style.borderColor="red";
        
    }
    else{
        document.getElementById("b").style.borderColor="#FFFFFF";
    }



    if (val7>=90)
    {
        document.getElementById("g7").value="O"
        document.getElementById("c7").value=10
    }
    if (val7>=80 && val7<90)
    {
        document.getElementById("g7").value="S"
        document.getElementById("c7").value=9
    }
    if (val7>=70 && val7<80)
    {
        document.getElementById("g7").value="A"
        document.getElementById("c7").value=8
    }
    if (val7>=60 && val7<70)
    {
        document.getElementById("g7").value="B"
        document.getElementById("c7").value=7
    }
    if (val7>=50 && val7<60)
    {
        document.getElementById("g7").value="C"
        document.getElementById("c7").value=6
    }
    if (val7>=45 && val<50)
    {
        document.getElementById("g7").value="D"
        document.getElementById("c7").value=5
    }
    if (val7>=40 && val7<45)
    {
        document.getElementById("g7").value="E"
        document.getElementById("c7").value=4
    }

    if (val7<40)
    {
        document.getElementById("g7").value="F"
        document.getElementById("c7").value=0
        document.getElementById("b").style.borderColor="#ff0000";
       
    }
    else{
        document.getElementById("b").style.borderColor="#FFFFFF";
    }


    
    
}
function call8()
{
    var val8=parseFloat(document.getElementById("s8").value);
 




    if (val8>=90)
    {
        document.getElementById("g8").value="O"
        document.getElementById("c8").value=10
    }
    if (val8>=80 && val8<90)
    {
        document.getElementById("g8").value="S"
        document.getElementById("c8").value=9
    }
    if (val8>=70 && val8<80)
    {
        document.getElementById("g8").value="A"
        document.getElementById("c8").value=8
    }
    if (val8>=60 && val8<70)
    {
        document.getElementById("g8").value="B"
        document.getElementById("c8").value=7
    }
    if (val8>=50 && val8<60)
    {
        document.getElementById("g8").value="C"
        document.getElementById("c8").value=6
    }
    if (val8>=45 && val8<50)
    {
        document.getElementById("g8").value="D"
        document.getElementById("c8").value=5
    }
    if (val8>=40 && val8<45)
    {
        document.getElementById("g8").value="E"
        document.getElementById("c8").value=4
    }

    if (val8<40)
    {
        document.getElementById("g8").value="F"
        document.getElementById("c8").value=0
        document.getElementById("b").style.borderColor="red";
    }
    var val9=parseFloat(document.getElementById("s9").value);
    if (val9>=90)
    {
        document.getElementById("g9").value="O"
        document.getElementById("c9").value=10
    }
    if (val9>=80 && val9<90)
    {
        document.getElementById("g9").value="S"
        document.getElementById("c9").value=9
    }
    if (val9>=70 && val9<80)
    {
        document.getElementById("g9").value="A"
        document.getElementById("c9").value=8
    }
    if (val9>=60 && val9<70)
    {
        document.getElementById("g9").value="B"
        document.getElementById("c9").value=7
    }
    if (val9>=50 && val9<60)
    {
        document.getElementById("g9").value="C"
        document.getElementById("c9").value=6
    }
    if (val9>=45 && val9<50)
    {
        document.getElementById("g9").value="D"
        document.getElementById("c9").value=5
    }
    if (val9>=40 && val9<45)
    {
        document.getElementById("g9").value="E"
        document.getElementById("c9").value=4
    }

    if (val9<40)
    {
        document.getElementById("g9").value="F"
        document.getElementById("c9").value=0
        document.getElementById("b").style.borderColor="red";
    }
}

    

function sgpa1()
{
        var val1=parseInt(document.getElementById("s1").value)
        var val2=parseInt(document.getElementById("s2").value)
        var val3=parseInt(document.getElementById("s3").value)
        var val4=parseInt(document.getElementById("s4").value)
        var val5=parseInt(document.getElementById("s5").value)
        var val6=parseInt(document.getElementById("s6").value)
        var val7=parseInt(document.getElementById("s7").value)
        var val8=parseInt(document.getElementById("s8").value)
        var val9=parseInt(document.getElementById("s9").value)
        if(val1< 40||val2< 40||val3< 40||val4< 40||val5< 40||val6< 40||val7< 40||val8 < 40||val9<40)
        {
            document.getElementById("total").style.color="#ff0000";
            document.getElementById("per").style.color="#ff0000";
            document.getElementById("sgpa").style.color="#ff0000";
            document.getElementById("re").style.borderColor="red";
            document.getElementById("resu").innerHTML="FAIL";
            document.getElementById("resu").style.color="#ff0000";
            

            
        }
        else{
            document.getElementById("total").style.color="#000000";
            document.getElementById("per").style.color="#000000";
            document.getElementById("sgpa").style.color="#000000";
            document.getElementById("re").style.borderColor="#FFFFFF";
            document.getElementById("re").style.borderColor="#008000";
            document.getElementById("resu").innerHTML="PASS";
            document.getElementById("resu").style.color="#008000";
        }
     
        
        var c1=parseInt(document.getElementById("c1").value);
        var c2=parseInt(document.getElementById("c2").value);
        var c3=parseInt(document.getElementById("c3").value);
        var c4=parseInt(document.getElementById("c4").value);
        var c5=parseInt(document.getElementById("c5").value);
        var c6=parseInt(document.getElementById("c6").value);
        var c7=parseInt(document.getElementById("c7").value);
        var c8=parseInt(document.getElementById("c8").value);
        var c9=parseInt(document.getElementById("c9").value);
         

        var t1=c1*3;
        var t2=c2*4;
        var t3=c3*3;
        var t4=c4*3;
        var t5=c5*3;
        var t6=c6*3;
        var t7=c7*2;
        var t8=c8*2;
        var t9=c9*1;
        var total=val1+val2+val3+val4+val5+val6+val7+val8+val9;
        document.getElementById("total").value= total;
        var per=total/900;
        var total1=per*100;
        document.getElementById("per").value= total1.toFixed(2);
        var cgpa=(t1+t2+t3+t4+t5+t6+t7+t8+t9)/24;
        document.getElementById("sgpa").value= cgpa.toFixed(2);
}
function sgpa2()
{
        var val1=parseInt(document.getElementById("s1").value)
        var val2=parseInt(document.getElementById("s2").value)
        var val3=parseInt(document.getElementById("s3").value)
        var val4=parseInt(document.getElementById("s4").value)
        var val5=parseInt(document.getElementById("s5").value)
        var val6=parseInt(document.getElementById("s6").value)
        var val7=parseInt(document.getElementById("s7").value)
        var val8=parseInt(document.getElementById("s8").value)
        var val9=parseInt(document.getElementById("s9").value)
        if(val1< 40||val2< 40||val3< 40||val4< 40||val5< 40||val6< 40||val7< 40||val8 < 40||val9<40)
        {
            document.getElementById("total").style.color="#ff0000";
            document.getElementById("per").style.color="#ff0000";
            document.getElementById("sgpa").style.color="#ff0000";
            document.getElementById("re").style.borderColor="red";
            document.getElementById("resu").innerHTML="FAIL";
            document.getElementById("resu").style.color="#ff0000";
            

            
        }
        else{
            document.getElementById("total").style.color="#000000";
            document.getElementById("per").style.color="#000000";
            document.getElementById("sgpa").style.color="#000000";
            document.getElementById("re").style.borderColor="#FFFFFF";
            document.getElementById("re").style.borderColor="#008000";
            document.getElementById("resu").innerHTML="PASS";
            document.getElementById("resu").style.color="#008000";
        }
        var c1=parseInt(document.getElementById("c1").value);
        var c2=parseInt(document.getElementById("c2").value);
        var c3=parseInt(document.getElementById("c3").value);
        var c4=parseInt(document.getElementById("c4").value);
        var c5=parseInt(document.getElementById("c5").value);
        var c6=parseInt(document.getElementById("c6").value);
        var c7=parseInt(document.getElementById("c7").value);
        var c8=parseInt(document.getElementById("c8").value);
        var c9=parseInt(document.getElementById("c9").value);
        var t1=c1*3;
        var t2=c2*4;
        var t3=c3*4;
        var t4=c4*3;
        var t5=c5*3;
        var t6=c6*3;
        var t7=c7*2;
        var t8=c8*2;
        var t9=c9*1;
        var total=val1+val2+val3+val4+val5+val6+val7+val8+val9;
        document.getElementById("total").value= total;
        var per=total/900;
        var total1=per*100;
        document.getElementById("per").value= total1.toFixed(2);
        var cgpa=(t1+t2+t3+t4+t5+t6+t7+t8+t9)/25;
        document.getElementById("sgpa").value= cgpa.toFixed(2);
}
function sgpatotal()
{
    if(document.getElementById("semname").innerHTML=="3RD SEMESTER")
    {
        sgpa1();
    }
    else if(document.getElementById("semname").innerHTML=="5TH SEMESTER")
    {
        sgpa2();
    }
    else if(document.getElementById("semname").innerHTML=="4TH SEMESTER")
    {
        sgpa1();
    }

}

    

    

function subchange3(){

    document.getElementById("code1").innerHTML="18MAT31";
    document.getElementById("code2").innerHTML="18CS32";
    document.getElementById("code3").innerHTML="18CPS23";
    document.getElementById("code4").innerHTML="18CS33";
    document.getElementById("code5").innerHTML="18CS35";
    document.getElementById("code6").innerHTML="18CS36";
    document.getElementById("code7").innerHTML="18CSL37";
    document.getElementById("code8").innerHTML="18CSL38";
    document.getElementById("code9").innerHTML="18KAK39";
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
    document.getElementById("s4").value="";
    document.getElementById("s5").value="";
    document.getElementById("s6").value="";
    document.getElementById("s7").value="";
    document.getElementById("s8").value="";
    document.getElementById("c1").value="";
    document.getElementById("c2").value="";
    document.getElementById("c3").value="";
    document.getElementById("c4").value="";
    document.getElementById("c5").value="";
    document.getElementById("c6").value="";
    document.getElementById("c7").value="";
    document.getElementById("c8").value="";
    document.getElementById("g1").value="";
    document.getElementById("g2").value="";
    document.getElementById("g3").value="";
    document.getElementById("g4").value="";
    document.getElementById("g5").value="";
    document.getElementById("g6").value="";
    document.getElementById("g7").value="";
    document.getElementById("g8").value="";
    document.getElementById("g9").value="";
    document.getElementById("c9").value="";
    document.getElementById("s9").value="";
    document.getElementById("per").value="";
    document.getElementById("total").value="";
    document.getElementById("sgpa").value="";
    document.getElementById("re").style.borderColor="white";
    document.getElementById("resu").innerHTML="";
    document.getElementById("resu").style.color="";






    document.getElementById("sub1").innerHTML="TRANSFORM CALCULUS,FOURIER SERIES & NUM TECH";
    document.getElementById("sub2").innerHTML="DATA STRUCTURES AND APPLICATIONS";
    document.getElementById("sub3").innerHTML="ANALOG AND DIGITAL ELECTRONICS";
    document.getElementById("sub4").innerHTML="COMPUTER ORGANIZATION";
    document.getElementById("sub5").innerHTML="SOFTWARE ENGINEERING";
    document.getElementById("sub6").innerHTML="DISCRETE MATHEMATICAL STRUCTURES";
    document.getElementById("sub7").innerHTML="ANALOG AND DIGITAL ELECTRONICS LABORATORY";
    document.getElementById("sub8").innerHTML="DATA STRUCTURES LABORATORY";
    document.getElementById("sub9").innerHTML=" AADALITHA KANNADA";
    document.getElementById("semname").innerHTML="3RD SEMSETER";
     	
    document.getElementById("csem1").value="3";
    
     	
     	
    

    
}

function subchange5(){
    document.getElementById("code1").innerHTML="18CS51";
    document.getElementById("code2").innerHTML="18CS52";
    document.getElementById("code3").innerHTML="18CS53";
    document.getElementById("code4").innerHTML="18CS54";
    document.getElementById("code5").innerHTML="18CS55";
    document.getElementById("code6").innerHTML="18CS56";
    document.getElementById("code7").innerHTML="18CSL57";
    document.getElementById("code8").innerHTML="18CSL58";
    document.getElementById("code9").innerHTML="18CIV59";
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
    document.getElementById("s4").value="";
    document.getElementById("s5").value="";
    document.getElementById("s6").value="";
    document.getElementById("s7").value="";
    document.getElementById("s8").value="";
    document.getElementById("c1").value="";
    document.getElementById("c2").value="";
    document.getElementById("c3").value="";
    document.getElementById("c4").value="";
    document.getElementById("c5").value="";
    document.getElementById("c6").value="";
    document.getElementById("c7").value="";
    document.getElementById("c8").value="";
    document.getElementById("g1").value="";
    document.getElementById("g2").value="";
    document.getElementById("g3").value="";
    document.getElementById("g4").value="";
    document.getElementById("g5").value="";
    document.getElementById("g6").value="";
    document.getElementById("g7").value="";
    document.getElementById("g8").value="";
    document.getElementById("g9").value="";
    document.getElementById("c9").value="";
    document.getElementById("s9").value="";
    document.getElementById("per").value="";
    document.getElementById("total").value="";
    document.getElementById("sgpa").value="";
    document.getElementById("re").style.borderColor="white";
    document.getElementById("resu").innerHTML="";
    document.getElementById("resu").style.color="";


    
     

    document.getElementById("sub1").innerHTML="MANAGEMENT AND ENTREPRENEURSHIP FOR IT INDUSTRY ";
    document.getElementById("sub2").innerHTML="COMPUTER NETWORKS AND SECURITY";
    document.getElementById("sub3").innerHTML="DATABASE MANAGEMENT SYSTEMS";
    document.getElementById("sub4").innerHTML="AUTOMATA THEORY AND COMPUTABILITY";
    document.getElementById("sub5").innerHTML="APPLICATION DEVELOPMENT USING PYTHON";
    document.getElementById("sub6").innerHTML="UNIX PROGRAMMING";
    document.getElementById("sub7").innerHTML="COMPUTER NETWORK LABORATORY";
    document.getElementById("sub8").innerHTML="DBMS LABORATORY WITH MINI PROJECT";
    document.getElementById("sub9").innerHTML="ENVIRONMENTAL STUDIES";
    document.getElementById("semname").innerHTML="5TH SEMESTER";

    document.getElementById("csem1").value="5";


    
}
function subchange4(){
    document.getElementById("code1").innerHTML="18MAT41";
    document.getElementById("code2").innerHTML="18CS42";
    document.getElementById("code3").innerHTML="18CS43";
    document.getElementById("code4").innerHTML="18CS44";
    document.getElementById("code5").innerHTML="18CS45";
    document.getElementById("code6").innerHTML="18CS46";
    document.getElementById("code7").innerHTML="18CSL47";
    document.getElementById("code8").innerHTML="18CSL48";
    document.getElementById("code9").innerHTML="18CPC39";
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
    document.getElementById("s4").value="";
    document.getElementById("s5").value="";
    document.getElementById("s6").value="";
    document.getElementById("s7").value="";
    document.getElementById("s8").value="";
    document.getElementById("c1").value="";
    document.getElementById("c2").value="";
    document.getElementById("c3").value="";
    document.getElementById("c4").value="";
    document.getElementById("c5").value="";
    document.getElementById("c6").value="";
    document.getElementById("c7").value="";
    document.getElementById("c8").value="";
    document.getElementById("g1").value="";
    document.getElementById("g2").value="";
    document.getElementById("g3").value="";
    document.getElementById("g4").value="";
    document.getElementById("g5").value="";
    document.getElementById("g6").value="";
    document.getElementById("g7").value="";
    document.getElementById("g8").value="";
    document.getElementById("g9").value="";
    document.getElementById("c9").value="";
    document.getElementById("s9").value="";
    document.getElementById("per").value="";
    document.getElementById("total").value="";
    document.getElementById("sgpa").value="";
    document.getElementById("re").style.borderColor="white";
    document.getElementById("resu").innerHTML="";
    document.getElementById("resu").style.color="";


    
     

    document.getElementById("sub1").innerHTML="Complex Analysis, Probability and Statistical Methods".toUpperCase();
    document.getElementById("sub2").innerHTML="Design and Analysis of Algorithm".toUpperCase();
    document.getElementById("sub3").innerHTML="Operating Systems".toUpperCase();
    document.getElementById("sub4").innerHTML="Microcontroller and Embedded Systems".toUpperCase();
    document.getElementById("sub5").innerHTML="Object Oriented Concepts".toUpperCase();
    document.getElementById("sub6").innerHTML="Data Communication".toUpperCase();
    document.getElementById("sub7").innerHTML="Design and Analysis of Algorithm Laboratory".toUpperCase();
    document.getElementById("sub8").innerHTML="Microcontroller and Embedded Systems Laboratory".toUpperCase();
    document.getElementById("sub9").innerHTML="Constitution of India, Professional Ethics ,Cyber Law".toUpperCase();
    document.getElementById("semname").innerHTML="4TH SEMESTER";

    document.getElementById("csem1").value="4";


    
}




