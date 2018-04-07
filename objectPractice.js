// FACTORY

const factory = function(name, age) {
  let temp = {};

  temp.name = name;
  temp.age = age;

  temp.log = function(){
    console.log(this.name, this.age);
  }

  return temp;
}

const test1 = factory('test1', 34);
const test11 = factory('test11', 134);
// test1.log();
// test11.log();


// CONSTRUCTOR

const constructor = function(name, age){
  this.name = name;
  this.age = age;

  this.log = function() {
    console.log(this.name, this.age);
  }
}

const test2 = new constructor('test2', 22);
const test22 = new constructor('test22', 222);

// test2.log()
// test22.log()


// PROTOTYPE

const prototypeFNC = function() {

}

prototypeFNC.prototype.name = 'no name';
prototypeFNC.prototype.age = 0;
prototypeFNC.prototype.state = 'no state';

prototypeFNC.prototype.log = function() {
  console.log(this.name, this.age, this.state);
}

const test3 = new prototypeFNC();

// test3.name = 'Cashto';
test3.age = 29;
test3.state = 'WA';

// test3.log();

// console.log('name' in test3);
// console.log(test3.hasOwnProperty('name')); // property is inheritied from prototype


// DYNAMIC PROTOTYPE 

const prototypeDyno = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  if (typeof this.log !== 'function'){
    console.count('log function created');
    prototypeDyno.prototype.log = function(){
      console.log(this.name, this.age, this.state);
    }
  }
}

// prototypeDyno.prototype.state = 'N/A'

const test4 = new prototypeDyno('Test4', 44);
const test44 = new prototypeDyno('Test44', 444, 'NY4');

// CLASS

class Car{
  constructor(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  log(){
    console.log(this.model, this.year, this.miles);
  }
}

const test5 = new Car('Legacy', 1998, 19000);
// test5.log();


class Dealer extends Car {
  constructor(model, year, miles, lot){
    super(model, year, miles);
    this.dealer = lot;
  }

  static salesMan(){
    console.log(`I'll get you a great deal!`);
  }

  info(){
    console.log(`Your ${this.model} is in stock at ${this.dealer}!`);
  }
}

const test6 = new Dealer('Jetta', 2008, 104000, 'Slick Ricks');

Dealer.salesMan()
test6.info();