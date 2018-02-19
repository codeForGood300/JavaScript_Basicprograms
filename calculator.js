function myFunction5() {
    var firstnumber = parseInt(document.getElementById("myNumber6").value);
    var secondnumber = parseInt(document.getElementById("myNumber7").value);
    
    var op = document.getElementById("myNumber8").value;
    var ansop= " ";
    var p=0;
    if(op==="+")
    {
        p = firstnumber+secondnumber;
            ansop = p;
    }
    else if(op==="-")
    {
            p = firstnumber-secondnumber;
            ansop = p;

    }
    else if(op==="*")
    {
            p = firstnumber*secondnumber;
            ansop = p;

    }
    else if(op==="/")
    {
            p = firstnumber/secondnumber;
            ansop = p;
    }
    else
    {
        ansop = "not available";
    }
   
    document.getElementById("demo5").innerHTML = ansop;
}