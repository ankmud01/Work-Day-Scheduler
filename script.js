const currentDate = moment();
console.log("Current Date is " + currentDate.format('MMM-DD-YYYY'));
$("#todaysdate").append(currentDate.format('MMM-DD-YYYY'));
