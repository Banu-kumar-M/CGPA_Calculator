function calll()
{
    var val1=parseFloat(document.getElementById("s1").value);
    var val2=parseFloat(document.getElementById("s2").value);
    var val3=parseFloat(document.getElementById("s3").value);
    var val4=parseFloat(document.getElementById("s4").value);
    var val5=parseFloat(document.getElementById("s5").value);
    var val6=parseFloat(document.getElementById("s6").value);
    var val7=parseFloat(document.getElementById("s7").value);
    var val8=parseFloat(document.getElementById("s8").value);


    var c=(val1+val2+val3+val4+val5+val6+val7+val8)/8;
    var total=val1+val2+val3+val4+val5+val6+val7+val8;
    document.getElementById("total").value= total;
    document.getElementById("sgpa").value= c.toFixed(2);

}