const person = {
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Hero ",
    lastName:"Lal"

}

console.log(person.fullName.call(person1));