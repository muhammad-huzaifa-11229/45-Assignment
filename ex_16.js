/* You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
var myfriends = ["Muhammad", "Irshad", "Ubad", "Huzaifa"];
console.log(myfriends);
console.log('we have 3 more friends to invite on dinner\n');
//adding three more friends
myfriends.unshift("Usama");
console.log(myfriends);
myfriends.splice(2, 0, "Ahmed");
console.log(myfriends);
myfriends.push("Ali");
console.log(myfriends);
for (var i = 0; i < myfriends.length; i++) {
    console.log("Mr. ".concat(myfriends[i], " you are invited to my dinner"));
}
