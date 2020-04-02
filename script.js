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
var inputArray = [];
const retriveData = JSON.parse(localStorage.getItem('items'));
console.log("My Old data - " + retriveData)

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

//setting event listner in the save button to save the value from text area in local storage
$(".savebutton").on("click",function(e){    //this creates the event click
    e.preventDefault()
//Local storage takes 2 parameter id and value. So we need to create 2 variable. One to store text 
//from inputbox and another to set the id value. This will set the right text value in rt id 
    var inputValue = $(this).prev().val();  
    // var inputboxid = $(this).prev().attr("id");
    console.log("My inputValue for is: " + inputValue);
    inputArray.push(inputValue);
    localStorage.setItem('items', JSON.stringify(inputArray))
});

// var boxid = Array.from($(".inputbox").attr("id"));
// console.log("the box id is " + boxid[0]);
// var textboxValue =  window.localStorage.getItem(boxid[0]);
// console.log("The value of this box is - " + textboxValue);
// $("#boxid[0]").append(textboxValue);
