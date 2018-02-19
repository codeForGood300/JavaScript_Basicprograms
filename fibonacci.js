function myFunction3() {
    var number = document.getElementById("myNumber3").value;
    var series="0 1";
    var first=0;
    var second=1;
    var sum=1;
    while(sum<number)
    {
        sum = first+second;
        series = series+" "+sum;
        first = second;
        second = sum;

    }
    document.getElementById("demo3").innerHTML = series;
}