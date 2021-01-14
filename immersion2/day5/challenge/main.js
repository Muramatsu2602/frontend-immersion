console.log("WELCOME TO MY FIRST JS EXPERIENCE!");

// simple calculator
function calculator(a, b, op) {

    if (!a || !b || op == "") {
        console.log("None of the parameters shall be null!");
        return;
    }

    var result = null;
    var status = true;

    switch (op) {

        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
        case 'x':
        case 'X':

            result = a * b;
            break;
        case '/':
            if (b == 0) {
                alert("YOU CANNOT DIVIDE BY 0!");
                return;
            }
            result = a / b;
            break;
        default:
            status = false;
            break;
    }

    if (status == true && result != null) {
        alert(`the result of ${a} ${op} ${b} equals to ${result}`);
    }

}


// calculator(4, 5);

calculator(10, 12, '+');
calculator(10, 5, '/');

// lazy age Finder hehe
var currentTime = new Date();
var currentYear = currentTime.getFullYear();

function ageFinder(birthDate) {
    if (birthDate) {
        console.log(`YOUR AGE: ${currentYear-birthDate} `)
    }
}

ageFinder(2001);
ageFinder(1990);

// Playing with objects

var car = {
    license_plate: "3123AVC",
    driver_license: "123jjsafjasf",
    driver_data: [{
        "full_name": "Jose Josias Amaral",
        "nick_name": "JOJO",
        "allergies": ["maths", "eggs"],
        marital_status: false,
    }],
    accident_score: 999,
};

console.log("Your Accident Score is:" + car.accident_score);


const obj = {
    member: [{
        name: 'Jean-Luc Picard',
        rank: 'Chef'
    }],
    member: [{
        name: 'Joao Doria',
        rank: 'Security'
    }],
    member: [{
        name: 'Murakami Joao',
        rank: 'Nurse'
    }],
    member: [{
        name: 'Marcos Pontes',
        rank: 'Boss'
    }],

};

Object.values(obj).forEach(key => {
    console.log(key, obj[key]);
});

// 