// CLASS CREATION PATTERN

// class User{
//   constructor(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   static announce(){ // Static method can be used when no object has been constructed
//     console.log('Everything is fine.');
//   }

//   create(){
//     console.log(`${this.name} has become. Email: ${this.email}`);
//   }
// }

// // const bob = new User('bob', 'bob@bobsucks.com', '1234');

// // bob.create();
// // bob.announce(); // Wont work unless you call static method on User class specifically
// // User.announce();

// class Member extends User {
//   constructor(name, email, password, memberStatus){
//     super(name, email, password); // used to help extend User class
//     this.member = memberStatus;
//   }

//   checkMembership(){
//     if (this.member){
//       console.log(`${this.name} is a member!`);
//     } else {
//       console.log(`Get the hell out of here, ${this.name}`);
//     }
//   }
// }

// const jim = new Member('Jim', 'j@j.j', 'jjj', false);
// const ash = new Member('Ash', 'a@j.j', 'aaj', true);

// jim.checkMembership();
// ash.checkMembership();


// class PeopleFactory{
//   constructor(name, age, state){
//     this.name = name;
//     this.age = age;
//     this.state = state;
//   }

//   printPerson(){
//     console.log(`
//       Name: ${this.name}, 
//       Age: ${this.age}, 
//       State: ${this.state}
//     `);
//   }
// }

// -----------------------------
// FACTORY CREATION PATTERN - stores new properties in a temporary object

// const PeopleFactory = function(name, age, state){

//   let temp = {};

//   temp.name = name;
//   temp.age = age;
//   temp.state = state;

//   temp.printPerson = function() {
//     console.log(`${temp.name}, ${temp.age}, ${temp.state}`);
//   }

//   return temp;
// }


// const ash = PeopleFactory('ash', '33', 'Living');
// // const ash = new PeopleFactory('ash', '33', 'Living');

// ash.printPerson();

// -----------------------------
// CONSTRUCTOR PATTERN - stores new properties in the function itself

const PeopleConstructor = function(name, age, state){
  this.name = name;
  this.age = age;
  this.state = state;
  
  this.printPerson = function(){
    console.log(`${name}, ${age}, ${state}`);
  }
}

const ash = new PeopleConstructor('Ash', 'a@b.c', 'Alive and well');
const wendy = new PeopleConstructor('Wendy', 'wa@b.c', 'AZ');

// ash.printPerson()
// wendy.printPerson()


// PROTOTYPE PATTERN - prevents creation of duplicate functions

var peopleProto = function() {
  
}

peopleProto.prototype.name = 'no name';
peopleProto.prototype.age = 0;
peopleProto.prototype.state = 'no state';

peopleProto.prototype.printPerson = function () {
  console.log(`${this.name}, ${this.age}, ${this.state}`);
}


var person1 = new peopleProto();
// person1.name = 'John';
person1.age = 54;
person1.state = 'WA';


// console.log('name' in person1); // shows true and object has name, even if not directly assigned because of prototype coverage
// console.log(person1.hasOwnProperty('name')); // shows false, looks for direct assignment and skips over prototype


// DYNAMIC PROTOTYPE PATTERN - cleaner way to create prototypes

const peopleDynamicProto = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  if (typeof this.printPerson !== 'function'){ // if printPerson FNC has not been created, create prototype - only triggers once!
    peopleDynamicProto.prototype.printPerson = function(){
      console.log(`${this.name}, ${this.age}, ${this.state}`);
    }
  }
}

const jimmy = new peopleDynamicProto('Jimmy', 32, 'WAA');

