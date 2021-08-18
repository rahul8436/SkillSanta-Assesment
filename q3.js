//Given Snippet
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company);

/*******************ANSWER*************************/

//If I do the evaluation on the basis of given snippet then there will be some syntx errors
//e.g--> emp1 will create a reference  , and there will be Unexpected identifier errors too, console.log should have been used
//followed by a semi-colon-->; and also 'c' of console will not be in Caps


/************COORECTED SNIPPET*******************/
var Employee =
{
company: 'Rohit'
}
var emp1 = Object.create(Employee);
delete emp1.company ;
console.log(emp1.company);
/***************CORRECTED OUTPUT*******/
//Rohit
