/*Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people
  you are inviting to dinner. */
var myfriends = ["Muhammad", "Irshad", "Ubad", "Huzaifa", "Usama"];
console.log("I am inviting".concat(myfriends.length, " number of friends to my dinner which are following\n"));
for (var i = 0; i < myfriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myfriends[i]));
}
