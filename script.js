//Declaring all the global variables so that they can be used through out the page
var inputbox9 = $("#9")
var inputbox10 = $("#10")
var inputbox11 = $("#11")
var inputbox12 = $("#12")
var inputbox1 = $("#1")
var inputbox2 = $("#2")
var inputbox3 = $("#3")
var inputbox4 = $("#4")
var inputbox5 = $("#5")

//This is to figure out the current date and add it to the header using append
const currentDate = moment();
console.log("Today's Date is: " + currentDate.format('MMM-DD-YYYY'));
$("#todaysdate").append(currentDate.format('MMM-DD-YYYY'));

//This is to figure out the current hour. Then use that to determine past, present and future
var currentHour = moment().hours()
console.log("The current hour is: " + currentHour);

//This conditional grabs the class from schedulerBody compares with current hour and sets the class to past, present or future
$(".inputbox").each(function(){
    var hour = parseInt($(this).attr("id"));
    console.log("hour " + hour);
    if(hour<currentHour){
        $(this).addClass("past");
    }else if (hour===currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
