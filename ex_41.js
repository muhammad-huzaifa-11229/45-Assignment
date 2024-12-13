/* Start with a copy of your program from Question / Exercise 41. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified.*/
var magicianNames = ["Muhammad", "Irshad", "Ubad", "Huzaifa"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(item);
    }
}
;
show_magicians();
