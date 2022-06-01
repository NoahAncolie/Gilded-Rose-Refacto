const { Item } = require("./gilded_rose")

let str = "hello world"
if (str.includes('hello')) {
    console.log("et bah ouais")
}

class BG {
    constructor(array) {
        this.array = array
    }

    transform() {
        this.array = this.array.map(item => 
            item *= 2
        )
        return (this.array)
    }
}

test = new BG([0, 1, 2, 3, 4, 5])
test.transform()

console.log(test.array)