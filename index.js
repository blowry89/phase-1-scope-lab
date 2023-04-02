// Declare a variable in global scope using var 
var customerName = 'bob'  
// Declare a constant in global scope 
const leastFavoriteCustomer = 'timmy'

// Write a function that accesses that global variable for customerName and uppercases it.
function upperCaseCustomerName() {
 customerName = customerName.toUpperCase()
}

//Write a function that when called, declares a variable bestCustomer and assign to not bob.
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
// Unsuccessfully reassign global const leastFavCust. 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'king'
}




