/*Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several
examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
var myTrans = ["Car", "Bike", "Bus", "Train"];
//1 method (loop)
// for(let i=0; i<myTrans.length; i++){
//     console.log(`I would like to own a ${myTrans[i]}`);
// }
//2 method
myTrans.map(function (ib) {
    console.log("I would like to own a ".concat(ib));
});
