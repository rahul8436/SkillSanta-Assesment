var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
print(new_arr);
/*********ANSWER********/
//print is not defined
//Instead of print console.log should have been used there


/*******CORRECTED CODE******/
var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
//print(new_arr);
console.log(new_arr);
/*********ANSWER********/
//1,28,39,17,32.5
