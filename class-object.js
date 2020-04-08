console.log(`class-object script`,`--------------------`);

// Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class.
// there is no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype based object oriented language, which means it doesn’t have classes rather it define behaviors using constructor function and then reuse it using the prototype.
/*****************************************************************/
// Defining class using es6
console.log(`Vehicle1`,`----------`);
class Vehicle1{ 
    constructor(name, maker, engine) { 
      this.name = name; 
      this.maker =  maker; 
      this.engine = engine; 
    } 
    getDetails(){ 
        return (`The name of the bike is ${this.name}.`) 
    } 
}
// Making object with the help of the constructor 
let bike1 = new Vehicle1('Hayabusa', 'Suzuki', '1340cc'); 
let bike2 = new Vehicle1('Ninja', 'Kawasaki', '998cc');
console.log(bike1.name);  // Hayabusa 
console.log(bike2.maker); // Kawasaki 
console.log(bike1.getDetails()); // The name of the bike is Hayabusa.

/*****************************************************************/
// Defining class in a Traditional Way.
console.log(`Vehicle2`,`----------`); 
function Vehicle2(name,maker,engine){ 
    this.name = name, 
    this.maker = maker, 
    this.engine = engine 
};  
Vehicle2.prototype.getDetails = function(){ 
    console.log('The name of the bike is '+ this.name); 
}  
let bike3 = new Vehicle2('Hayabusa','Suzuki','1340cc'); 
let bike4 = new Vehicle2('Ninja','Kawasaki','998cc');  
console.log(bike3.name);   // Hayabusa 
console.log(bike4.maker);  // Kawasaki 
bike3.getDetails() // The name of the bike is Hayabusa

console.log(`class-object script`,`--------------------`);