function check(s) {
    if (typeof s !== "string" || typeof s === "")
        return false;

    return true;
}

function ucfirst(s) {
    if (!check(s)) {
        return "";
    }

    return s.charAt(0).toUpperCase() + s.slice(1);
}

//console.log(ucfirst("hello world"));

function capitalize(s) {
    var splitStr = s.split(' ');

    i = 0;
    for (mot of splitStr) {
        splitStr[i] = ucfirst(mot);
        i++;
    }
    return splitStr.join(' ');
}

//console.log(capitalize("hello world"));

function pascalCase(s) {
    return capitalize(s).split(' ').join('');
}

//console.log(pascalCase("hello world"));

function snake_case(s) {
    if (!check(s)) {
        return "";
    }

    return s.split(' ').join('_');
}

//console.log(snake_case("hello world Bonjour Monde Ciao mondo"));

function crypte(lettre) {
    var regles = {'A':'4', 'E':'3', 'I':'1', 'O':'0', 'U':'_', 'Y':'7'};

    return regles[lettre.toUpperCase()] || lettre;
}
function leet(s) {
    if (!check(s)) {
        return "";
    }
    return s.replace(/[AEIOU_7aeiou]/g, crypte);
}

//console.log(leet("Ici il fait pAs beau"));

function Animal(type) {
    this.type = type;
}

var praire = new Animal("Chien");

function reverse(mot) {
    return mot.split("").reverse().join("");
}
function verlan(s) {
    if (!check(s)) {
        return "";
    }

    var splitStr = s.split(' ');
    i = 0;
    for (mot of splitStr) {
        splitStr[i] = reverse(mot);
        i++;
    }
    return splitStr.join(' ');
}

//console.log(verlan("Hello world"));

function yoda(s) {
    if (!check(s)) {
        return "";
    }

    var splitStr = s.split(' ');
    var newStr = [];
    for (var i = splitStr.length - 1, x = 0; i >= 0; i--) {
        newStr[x++] = splitStr[i];
    }
    return newStr.join(' ');
}

//console.log(yoda("Hello world"));