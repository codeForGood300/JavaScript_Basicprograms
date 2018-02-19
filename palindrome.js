function myFunction2() 
{
    var y = document.getElementById("myNumber2").value;
 // var len = "A man, a plan, a canal. Panama".length = 30

   var a = y.split("").reverse();
   var b=y.split("");
   var com="yes this is palindrome";
   for(var i=0;i<y.length;y++)
   {
    if(b[i]!==a[i])
    {
        com="no this is not palindrome";
        break;
    }
   }
    document.getElementById("demo2").innerHTML = com;
}
