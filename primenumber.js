function myFunction4()
 {
    var num = document.getElementById("myNumber4").value;
    //get the input value

    var c = 0;
    var i=0;
    //loop till i equals to $num
    for (i = 1; i <= num; i++) {
        //check if the $num is divisible by itself and 1
        // % modules will give the reminder value, so if the reminder is 0 then it is divisible
        if (num % i == 0) {
            //increment the value of c
            c = c + 1;
        }
    }

    //if the value of c is 2 then it is a prime number
    //because a prime number should be exactly divisible by 2 times only (itself and 1)
    if (c == 2) {
        document.getElementById('demo4').innerHTML = num + ' is a Prime number';
    } else {
        document.getElementById('demo4').innerHTML = num + ' is NOT a Prime number';
    }
}