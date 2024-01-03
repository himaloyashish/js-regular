class Movie {
    constructor(romantic) {
        this.genre = romantic;

    }

    bollywood() {
        return this.genre + " " + " Movie in bollywood is overwhelm"
    }
}

class Genre extends Movie {
    constructor(romantic, name) {
        super(romantic)
        this.name = name;
    }

    show() {
        return this.name + " " + this.bollywood()
    }

}

let bella = new Genre("romantic", "twilight")

console.log(bella.show());
