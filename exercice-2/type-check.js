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

/*
function type_check_v2(v, obj) {
  // if enum
  if ("enum" in obj && obj["enum"].includes(v) && type_check_v1(v, "number")) {
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
*/

function type_check_v2(variable, conf) {
  for (toCheck in conf) {
    switch (toCheck) {
      case "type":
        if (type_check_v1(variable, conf.type) === false) return false;
        break;
      case "value":
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
        break;
      case "enum":
        let found = false;
        for (subValue of conf.enum) {
          found = type_check_v2(variable, { value: subValue });
          if (found) break;
        }
        if (!found) return false;
        break;
    }
  }
  return true;
}

console.log(type_check_v2({prop1: 1}, {type: "object"}));
console.log(type_check_v2("foo", {type: "string", value:"foo"}));
console.log(type_check_v2("bar", {type: "string", value:"foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}));


