String.prototype.crypte = function() {
    const lettre = this;
    var regles = {'A':'4', 'E':'3', 'I':'1', 'O':'0', 'U':'(_)', 'Y':'7'};

    return regles[lettre.toUpperCase()] || lettre;
}

String.prototype.leet = function() {
    const s = this;

    const obj = {a: 4, e: 3, i: 1, o: 0, u: '(_)', y: 7};

    return s.replace(/[AEIOUY]/gi, function(e) {
        return obj[e.toLowerCase()] !== undefined ? obj[e.toLowerCase()] : e;
    });

    //return s.replace(/[AEIOUYaeiouy]/g, crypte);
}

String.prototype.prop_access = function(path) {
    const object = this;

    if (typeof object !== "object") {
        return "";
    }
    if (typeof path !== "string" || path === "" || path === null) {
        return object;
    }

    let parts = path.split(".");
    let content = object;

    for (const element of parts) {
        if((element in content) === false) {
            return path+" not exist";
        }
        content = content[element];
    }
    return content;
}


String.prototype.prop_access = function(path) {
    const object = this;

    if (path.length == 0) return object;
    if(object == null) {
        //console.log(path + " not exist");
        return;
    }
  
    path.split('.').map(function (prop) {
        if (!object.hasOwnProperty(prop)) return object = path + " not exist";
        object = object[prop];
    });

    return object;
}

String.prototype.snake_case = function() {
    const s = this;

    return s.replace(/ /g, '_').toLowerCase();
}

String.prototype.ucfirst = function() {
    const s = this;

    const firstLetter = s.charAt(0).toUpperCase();
    const rest = s.substring(1);

    return firstLetter + rest;
}

String.prototype.capitalize = function() {
    const chaine = this;

    if (chaine.length === 0) return "";
  
    return chaine.toLowerCase()
      .split(" ")
      .map(function(word) {
          return word.ucfirst();
      }).join(" ");
}

String.prototype.camelCase = function() {
    const chaine = this;

    return chaine.replace(/_/g, ' ').capitalize().replace(/\W/g, "");
    //return chaine.capitalize().replace(/\W/g, "");
}

String.prototype.verlan = function() {
    const chaine = this;

    return chaine
        .split(" ")
        .map((word) => {
        return word.split("").reverse().join("");
        })
        .join(" ");
}

String.prototype.vig = function(code) {
    const string = this;

    if (string.length === 0) return string;
  
    while (code.length < string.length) {
      code += code;
    }
    code = code.substr(0, string.length);
    let codeIndex = 0;
  
    return string
      .split("")
      .map((letter, index) => {
        letter = letter.toLowerCase();
        const aCode = "a".charCodeAt(0);
        const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]
  
        if (letterNumber < 0 || letterNumber > 25) return letter;
  
        const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
        codeIndex++;
  
        return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
      })
      .join("");
}

String.prototype.yoda = function() {
    const chaine = this;

    return chaine.split(" ").reverse().join(" ");
}

String.prototype.crypte = function() {
    const lettre = this;
    var regles = {'A':'4', 'E':'3', 'I':'1', 'O':'0', 'U':'(_)', 'Y':'7'};

    return regles[lettre.toUpperCase()] || lettre;
}