// Objeto
var House = {
    size: 50,
    color: "green",
    rooms: 3,
}

console.log(House);


House.size = 80;

var House2 = {};
House2.size = 39;
House2.name = "japones";


// Pseudo-class
var House = function (size, color, rooms) {
    this.size = size;
    this.color = color;
    this.rooms = rooms;
};


var house1 = new House(50, "green", 3);
var house2 = new House(200, "white", 10);

console.log(house1);

class House3 {
    constructor(size, color, rooms) {
        this.size = size;
        this.color = color;
        this.rooms = rooms;

        this.calcPrice = function () {
            return this.size = this.rooms + 10;
        };
    }
}
