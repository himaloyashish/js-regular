class Camera {
    constructor ( name , price){
        this.name = name;
        this.price = price;
    }

    model(m){
      return  this.name + " " +` ${m}` + " is good";
    }
}

const nikon = new Camera("Nikon L50", 1098);
const canon = new Camera("Canon Gm0", 1198);

console.log(nikon.model("50gr"));