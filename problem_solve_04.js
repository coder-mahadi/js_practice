// Array Reverse
var arr = [1, 2, 3, 4, 5]
for (var i = 0; i < arr.length / 2; i++) {
    var ind = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = ind;

}
console.log(arr)