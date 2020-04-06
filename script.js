//storing everything from local storage into an array variable
var inputArray = JSON.parse(localStorage.getItem('input')) || [];

//getting value back from local storage and putting value correctly in UI
for (var i=0; i<inputArray.length; i++){
    var currentItem = inputArray[i];
    var itemid = currentItem.id;
    var itemvalue = currentItem.value;

    var inputboxEl = document.getElementById(''+ itemid + '');
    inputboxEl.value = itemvalue;
}

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
    var inputValue = {
    value: $(this).prev().val(),  
    id: $(this).prev().attr("id")
    }
    inputArray.push(inputValue);
    console.log(inputArray);
    localStorage.setItem('input', JSON.stringify(inputArray))
});
