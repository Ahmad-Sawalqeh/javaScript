console.log(`encapsulation script`,`--------------------`);

// process of wrapping property and function within a single unit, for Hiding data or Abstracting data.

// Hiding data

class person{ 
    constructor(name,id){ 
        this.name = name; 
        this.id = id; 
    } 
    add_Address(add){ 
        this.add = add; 
    } 
    getDetails(){ 
        console.log(`Name is ${this.name}, Address is: ${this.add}`); 
    } 
} 
  
let person1 = new person('Mukul',21); 
person1.add_Address('Delhi'); 
person1.getDetails(); // Name is Mukul, Address is: Delhi

// Abstracting data
/*
function person(fname,lname){ 
    let firstname = fname; 
    let lastname = lname; 
  
    let getDetails_noaccess = function(){ 
        return (`First name is: ${firstname} Last name is: ${lastname}`); 
    } 
  
    this.getDetails_access = function(){ 
        return (`First name is: ${firstname}, Last name is: ${lastname}`); 
    } 
} 
let person1 = new person('Mukul','Latiyan'); 
console.log(person1.firstname);  // undefined
console.log(person1.getDetails_noaccess);  // undefined
console.log(person1.getDetails_access()); // First name is: Mukul, Last name is: Latiyan
*/
/**************************************************************************/

class Counter{
    constructor(){
        var count = 0; // private
        this.click = () => {
            count += 1;
        }
        this.getCount = () => {
            return count;
        }
    }
}

var test = new Counter();
// you can access to count variable using method
console.log(test.count); // undefined
console.log(test.getCount()); // 0

// increase variable from function
test.click();
console.log(test.getCount()); // 1

/**************************************************************************/
/*
// to use count from instance object
class Counter{
    constructor(){
        this.count = 0; // public
    }
    click = () => {
        this.count += 1;
    }
    getCount =() => {
        return this.count;
    }
}

var test = new Counter();
console.log(test.count); // 0
console.log(test.getCount()); // 0

// increase variable from method
test.click();
console.log(test.getCount()); // 1
console.log(test.count);
*/

console.log(`encapsulation script`,`--------------------`);