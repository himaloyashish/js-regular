class Movie {
    constructor(romantic) {
        this.genre = romantic;

    }

    bollywood() {
        return this.genre + " " + " Movie in bollywood is overwhelm"
    }

    get godFather() {
        return  " Godfather is not a" +  " " + this.genre;
    }

    set twilightMovie (thriller){
        this.genre = thriller
    }
}

class Genre extends Movie {
    constructor(romantic, name) {
        super(romantic)
        this.name = name;
    }

    static hello(){
        return "hello"
    }

    show() {
        return this.name + " " + this.bollywood()
    }

}

let bella = new Genre("romantic", "twilight")

console.log(bella.godFather);
console.log(Genre.hello());
