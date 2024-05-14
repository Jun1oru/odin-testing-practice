export function capitalize(string) {
  const capitalizedString = string[0].toUpperCase() + string.slice(1);
  return capitalizedString;
}

export function reverseString(string) {
  const array = string.split("");
  const reverseArray = array.reverse();
  const reversedString = reverseArray.join("");
  return reversedString;
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function caesarCipher(string, shiftFactor) {
  let shiftedString = "";

  function shiftChar(char, shiftFactor) {
    const n = shiftFactor > 0 ? shiftFactor : 26 + (shiftFactor % 26);
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      return ((charCode - 97 + n) % 26) + 97;
    } else if (charCode >= 65 && charCode <= 90) {
      return ((charCode - 65 + n) % 26) + 65;
    }
    return charCode;
  }

  shiftedString = string
    .split("")
    .map((char) => {
      return String.fromCharCode(shiftChar(char, shiftFactor));
    })
    .join("");

  return shiftedString;
}

export function analyzeArray(array) {
  function findAverage(array) {
    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return sum / array.length;
  }

  const object = {
    average: findAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}
