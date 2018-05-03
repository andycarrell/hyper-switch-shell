const { isValid, getKey } = require("../util");

describe("isValid", () => {
  const inValidCases = [
    null,
    undefined,
    "",
    "notvalid",
    "shellload",
    "shell:load",
    "shell:load:",
    "shell:load:..."
  ];

  const validCases = [
    "shell:load:default",
    "shell:load:string",
    "shell:load:aS_40"
  ];

  inValidCases.forEach(testCase => {
    test(`${testCase} should be invalid`, () => {
      expect(isValid(testCase)).toBeFalsy();
    });
  });

  validCases.forEach(testCase => {
    test(`${testCase} should be invalid`, () => {
      expect(isValid(testCase)).toBeTruthy();
    });
  });
});

describe("getKey", () => {
  const testCases = [
    ["shell:load:default", "default"],
    ["shell:load:", ""],
    ["shell:load", "shell:load"]
  ];

  testCases.forEach(([testCase, expected]) => {
    test(`${testCase} should return ${expected}`, () => {
      expect(getKey(testCase)).toBe(expected);
    });
  });
});
