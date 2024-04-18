let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
  }
  
  var car = Object.create(vehicle, carProps);
//   console.log(car);
//   console.log("car");

function Person (name){
    this.name = name;
    this.age = 26;
}

const Ashish = new Person("Ashish")

// console.log(Ashish);

function Persons (){}
    Persons.prototype.name = "Ashish";
    Persons.prototype.age = 26;
const ab = new Persons();
console.log(ab.age);