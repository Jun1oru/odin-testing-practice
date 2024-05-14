import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from ".";

test("Capitalize string", () => {
  const tests = [
    {
      string: "hello world!",
      capitalized: "Hello world!",
    },
    {
      string: "hoW ArE yOU?",
      capitalized: "HoW ArE yOU?",
    },
    {
      string: "anOTHer sentencE",
      capitalized: "AnOTHer sentencE",
    },
  ];
  tests.forEach((input) => {
    expect(capitalize(input.string)).toBe(input.capitalized);
  });
});

test("Reverse string", () => {
  const tests = [
    {
      string: "hello world!",
      reversed: "!dlrow olleh",
    },
    {
      string: "What?",
      reversed: "?tahW",
    },
    {
      string: "you are my friend",
      reversed: "dneirf ym era uoy",
    },
  ];
  tests.forEach((input) => {
    expect(reverseString(input.string)).toBe(input.reversed);
  });
});

describe("Calculator", () => {
  test("Add function", () => {
    const tests = [
      {
        a: 1,
        b: 2,
        result: 3,
      },
      {
        a: 5,
        b: 6,
        result: 11,
      },
      {
        a: -2,
        b: 1,
        result: -1,
      },
    ];
    tests.forEach((input) => {
      expect(calculator.add(input.a, input.b)).toBe(input.result);
    });
  });

  test("Subtract function", () => {
    const tests = [
      {
        a: 2,
        b: 1,
        result: 1,
      },
      {
        a: 5,
        b: 3,
        result: 2,
      },
      {
        a: 10,
        b: 4,
        result: 6,
      },
    ];
    tests.forEach((input) => {
      expect(calculator.subtract(input.a, input.b)).toBe(input.result);
    });
  });

  test("Divide function", () => {
    const tests = [
      {
        a: 10,
        b: 2,
        result: 5,
      },
      {
        a: 100,
        b: 10,
        result: 10,
      },
      {
        a: 3,
        b: 1,
        result: 3,
      },
    ];
    tests.forEach((input) => {
      expect(calculator.divide(input.a, input.b)).toBe(input.result);
    });
  });

  test("Multiply function", () => {
    const tests = [
      {
        a: 4,
        b: 4,
        result: 16,
      },
      {
        a: 9,
        b: 2,
        result: 18,
      },
      {
        a: 5,
        b: 7,
        result: 35,
      },
    ];
    tests.forEach((input) => {
      expect(calculator.multiply(input.a, input.b)).toBe(input.result);
    });
  });
});

test("Caesar Cipher", () => {
  const tests = [
    {
      string: "MARCUS CRASSUS",
      shiftFactor: 5,
      shiftedString: "RFWHZX HWFXXZX",
    },
    {
      string: "MARCUS BRUTUS",
      shiftFactor: 3,
      shiftedString: "PDUFXV EUXWXV",
    },
    {
      string: "z",
      shiftFactor: 1,
      shiftedString: "a",
    },
    {
      string: "Beware the Ides of March",
      shiftFactor: 7,
      shiftedString: "Ildhyl aol Pklz vm Thyjo",
    },
    {
      string: ".",
      shiftFactor: 2,
      shiftedString: ".",
    },
  ];
  tests.forEach((input) => {
    expect(caesarCipher(input.string, input.shiftFactor)).toBe(
      input.shiftedString,
    );
  });
});

test("Analyze Array", () => {
  const tests = [
    {
      myObject: {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      },
      array: [1, 8, 3, 4, 2, 6],
    },
    {
      myObject: {
        average: 16,
        min: 6,
        max: 23,
        length: 5,
      },
      array: [23, 15, 14, 22, 6],
    },
  ];

  tests.forEach((input) => {
    expect(analyzeArray(input.array)).toEqual(input.myObject);
  });
});
