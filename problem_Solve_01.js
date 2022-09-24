// Even Number print by function for range or random number

function evenNum() {
    if (arguments.length == 2) {
        console.log("It's Work For Range");
        for (var i = arguments[0]; i <= arguments[1]; i++) {
            if (i % 2 === 0) {
                console.log("Even Number : " + i);
            }
        }
    } else if (arguments.length > 2) {
        for (var i = 0; i <= arguments.length; i++) {
            console.log("It's Work For Random Number");
            if (arguments[i] % 2 === 0) {
                console.log("Even Number : " + arguments[i]);
            }
        }
    }

}
evenNum(1, 10);
