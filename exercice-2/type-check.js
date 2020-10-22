/*
function type_check_v1(v, t) {
    if (typeof v === t)
        return true;
    else if (typeof v === "object") {
        switch (t) {
            case "null":
                return v === null;
            case "array":
                return Array.isArray(v);
            default:
                return v !== null && !Array.isArray(v);
        }
    }


    return false;
}
*/

function type_check_v1(variable, type) {
  switch (typeof variable) {
    case "symbol":
    case "number":
    case "string":
    case "boolean":
    case "undefined":
    case "function":
      return type === typeof variable;
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        default:
          return variable !== null && !Array.isArray(variable);
      }
  }
}


//console.log(type_check_v1("sdfsdfdsfsdfd fdf", "number"));

function type_check_v2(v, obj) {
  // if enum
  if ("enum" in obj && obj["enum"].includes(v)) {
    return true;
  }
  else if ("type" in obj && !("value" in obj)) {
    return type_check_v1(v, obj["type"]);
  }
  else if ("value" in obj) {
    return (obj["value"] === v && type_check_v1(v, obj["type"]));
  }

  return false
}

console.log(type_check_v2({prop1: 1}, {type: "object"}));
console.log(type_check_v2("foo", {type: "string", value:"foo"}));
console.log(type_check_v2("bar", {type: "string", value:"foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}));


