//objects

var customer = {
    firstname: 'Harsh',
    lastename: 'patil',
    car: ['BMW','Volvo','Nexon']
}

// Dot notation
customer.firstname = "John"
// Bracket notation
customer['lastename'] = "Smith"
console.log(`${customer.firstname} ${customer.lastename} ${customer.car[1]}`)

//Array

var car = ['BMW','Volvo','Nexon']
car[1] = "Tata"
console.log(car[1])