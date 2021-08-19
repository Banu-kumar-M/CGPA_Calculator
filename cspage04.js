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






function sgpa()
{
        var val1=parseInt(document.getElementById("s1").value)
        var val2=parseInt(document.getElementById("s2").value)
        var val3=parseInt(document.getElementById("s3").value)
        var val4=parseInt(document.getElementById("s4").value)
        var val5=parseInt(document.getElementById("s5").value)
        var val6=parseInt(document.getElementById("s6").value)
        var val7=parseInt(document.getElementById("s7").value)
       
        if(val1< 40||val2< 40||val3< 40||val4< 40||val5< 40||val6< 40||val7< 40)
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
       
         

        var t1=c1*4;
        var t2=c2*4;
        var t3=c3*3;
        var t4=c4*3;
        var t5=c5*3;
        var t6=c6*2;
        var t7=c7*1;
        
        var total=val1+val2+val3+val4+val5+val6+val7;
        document.getElementById("total").value= total;
        var per=total/700;
        var total1=per*100;
        document.getElementById("per").value= total1.toFixed(2);
        var cgpa=(t1+t2+t3+t4+t5+t6+t7)/20;
        document.getElementById("sgpa").value= cgpa.toFixed(2);
}