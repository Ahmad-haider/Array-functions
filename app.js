console.log("1. Write a ts program to read and print elements of array.");
var array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log("2. Write a ts program to print all negative elements in an array.");
var negative = [1, -2, 3, -4, 5, -6, 7, 8, 9];
var nothing = 0;
for (var i = 0; i < negative.length; i++) {
    if (negative[i] < 0) {
        console.log(negative[i]);
    }
    else if (negative[i] > 0) {
        nothing++;
    }
    negative.reduce;
}
console.log("6. Write a ts program to count total number of even and odd elements in an array.");
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var even = 0;
var odd = 0;
for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
        even++;
    }
    else if (number[i] % 2 != 0) {
        odd++;
    }
}
console.log("even", even);
console.log("odd", odd);
console.log("7. Write a ts program to count total number of negative elements in an array.");
var number1 = [1, -2, 3, -4, 5, -6, 7, 8, 9];
var count = 0;
var nothing = 0;
for (var i = 0; i < number1.length; i++) {
    if (number1[i] < 0) {
        count++;
    }
    else {
        nothing++;
    }
    number1.reduce;
}
console.log(count);
console.log("8. Write a ts program to copy all elements from an array to another array.");
var array1 = [1, 2, 3, 4, 5];
var copy = array1;
console.log(copy);
console.log("9. Write a ts program to insert an element in an array.");
var array2 = [1, 2, 3, 4];
array2.push(5);
array2.unshift(0);
console.log(array2);
console.log("10. Write a ts program to delete an element from an array at specified position.");
var arr2 = [1, 2, 3, 4, 5].splice(0, 3);
console.log(arr2);
console.log("15. Write a ts program to merge two array to third array.");
var Arr = [2, 4, 6, 8, 10];
var Arr1 = [1, 3, 5, 7, 9];
var merged = Arr.concat(Arr1);
console.log(merged);
console.log("16. Write a ts program to find reverse of an array.");
var arr = [1, 2, 3, 4, 5].reverse();
console.log(arr);
console.log("18. Write a ts program to search an element in an array.");
var arr1 = [1, 2, 3, 4, 5].indexOf(4);
console.log(arr1);
console.log("19. Write a ts program to sort array elements in ascending or descending order.");
var sort = [4, 2, 1, 3, 5].sort(function (a, b) { return a - b; });
console.log(sort);
