function myFunction1() {
    var x = document.getElementById("myNumber1").value;
    var temp,x,xx;
    temp=2;
    xx=x;
    ans=1;
    while(temp<=xx)
    {
        ans=temp*ans;
        temp++;

    }
    document.getElementById("demo1").innerHTML = ans;
}