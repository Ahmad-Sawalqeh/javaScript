console.log(`inhertiance script`,`--------------------`);

// class inheritance from class
class CarClass{
    constructor(name){ // super class constructor
        this.name =name;
    }
    nameCar(){
        console.log(`${this.name} good car`);
    }
}

class BMW extends CarClass{ // extends to inhert the Car Class method and values
    constructor(name){
        super(name) // call the super calss constructor then pass name as parameter
    }
    // you might add same method 
    nameCar(){ // override
        console.log(`I love ${this.name}`);
    }
}

let carClass = new BMW(`BMW E50`)
carClass.nameCar(); // call Car Class method from BMW Class

/**********************************************************************************************************/

// class inheritance from function
function CarFunction(name){
    this.name = name;
}

CarFunction.prototype.nameCar = function(){
    console.log(`${this.name} good car`);
}

class Mercedes extends CarFunction{
    // you might add same method 
    nameCar(){ // override
        console.log(`I love ${this.name}`);
    }
}

let carFunction = new Mercedes(`Mercedes Benz`); // Class BMW inhert from Car function to get nameCar function and method name
carFunction.nameCar(); // CarFunction function method

/**********************************************************************************************************/

// inher function from function
function ParentFunction(){
    this.parent = `parent`;
}

ParentFunction.prototype.getParentFunction = function(){
    return this.parent;
}

function ChildFunction(){
    this.child = `child`;
}
// inhert from parent
ChildFunction.prototype = new ParentFunction();
// add new property to child function
ChildFunction.prototype.getChildFunction = function(){
    return this.child;
}
// you might add same parent method 
ChildFunction.prototype.getParentFunction = function(){ // override
    return `I love parent and child`;
}

let testCall = new ChildFunction();
// you can access to parent method or child method
console.log(`ParentFunction => `,testCall.getParentFunction());
console.log(`ChildFunction => `,testCall.getChildFunction());

console.log(`inhertiance script`,`--------------------`);