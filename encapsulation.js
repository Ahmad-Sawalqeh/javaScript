console.log(`encapsulation script`,`--------------------`);

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